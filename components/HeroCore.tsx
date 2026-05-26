'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Label = {
  name: string;
  side: 'in' | 'out';
};

const labels: Label[] = [
  { name: 'Legal', side: 'in' },
  { name: 'Healthcare', side: 'in' },
  { name: 'Finance', side: 'in' },
  { name: 'Government', side: 'in' },
  { name: 'Operations', side: 'in' },
  { name: 'Compliance', side: 'in' },
  { name: 'Risk', side: 'in' },
  { name: 'Clinical systems', side: 'in' },
  { name: 'Verified decisions', side: 'out' },
  { name: 'Structured reasoning', side: 'out' },
  { name: 'Audit trails', side: 'out' },
  { name: 'Policy validation', side: 'out' },
  { name: 'Decision lineage', side: 'out' }
];

export function HeroCore() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040b14, 0.032);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0.8, 9.4);

    const root = new THREE.Group();
    const ringGroup = new THREE.Group();
    const streamGroup = new THREE.Group();
    const shieldGroup = new THREE.Group();
    root.add(ringGroup, streamGroup, shieldGroup);
    scene.add(root);

    const cyan = new THREE.Color('#21D4FD');
    const teal = new THREE.Color('#28E0B9');
    const mint = new THREE.Color('#A7F3D0');
    const amber = new THREE.Color('#F6C85F');
    const risk = new THREE.Color('#FF6B5F');
    const white = new THREE.Color('#F5FAFF');
    const slate = new THREE.Color('#9FB5C8');

    const coreLight = new THREE.PointLight(0x21d4fd, 2.8, 18, 1.8);
    coreLight.position.set(0, 0.1, 1.2);
    scene.add(coreLight);
    const amberLight = new THREE.PointLight(0xf6c85f, 1.6, 10, 2);
    amberLight.position.set(0.4, -0.2, 1.6);
    scene.add(amberLight);

    const coreGeometry = new THREE.IcosahedronGeometry(1.02, 5);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: white,
      transparent: true,
      opacity: 0.22,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    root.add(coreMesh);

    const innerGeometry = new THREE.SphereGeometry(0.56, 64, 64);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: amber,
      transparent: true,
      opacity: 0.58
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    root.add(inner);

    const glowGeometry = new THREE.SphereGeometry(0.84, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: cyan,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    root.add(glow);

    const makeRing = (radius: number, tube: number, color: THREE.Color, opacity: number, rotation: [number, number, number]) => {
      const geometry = new THREE.TorusGeometry(radius, tube, 18, 180);
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
      ringGroup.add(mesh);
      return mesh;
    };

    const rings = [
      makeRing(1.72, 0.012, cyan, 0.38, [1.1, 0.3, 0.2]),
      makeRing(2.08, 0.01, teal, 0.28, [0.6, 1.2, 0.5]),
      makeRing(2.52, 0.008, mint, 0.18, [1.5, 0.4, 1.1]),
      makeRing(3.02, 0.006, slate, 0.12, [0.5, 0.8, 1.7])
    ];

    const shieldGeometry = new THREE.CircleGeometry(3.42, 6);
    const shieldMaterial = new THREE.MeshBasicMaterial({
      color: mint,
      transparent: true,
      opacity: 0.045,
      wireframe: true
    });
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    shield.rotation.set(0.2, 0.6, 0.5);
    shieldGroup.add(shield);

    const streams: THREE.Line[] = [];
    const particles: THREE.Mesh[] = [];
    const makeStream = (angle: number, distance: number, color: THREE.Color, isOut: boolean) => {
      const start = new THREE.Vector3(Math.cos(angle) * distance, Math.sin(angle) * distance * 0.62, -0.4);
      const end = new THREE.Vector3(Math.cos(angle) * 1.3, Math.sin(angle) * 0.72, 0.15);
      const curve = new THREE.CatmullRomCurve3(isOut ? [end, new THREE.Vector3(Math.cos(angle) * 2.3, Math.sin(angle) * 1.05, 0.25), start] : [start, new THREE.Vector3(Math.cos(angle) * 2.3, Math.sin(angle) * 1.05, 0.25), end]);
      const points = curve.getPoints(72);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: isOut ? 0.34 : 0.22,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(geometry, material);
      streamGroup.add(line);
      streams.push(line);

      const pGeo = new THREE.SphereGeometry(isOut ? 0.038 : 0.028, 12, 12);
      const pMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: isOut ? 0.75 : 0.54 });
      const p = new THREE.Mesh(pGeo, pMat);
      p.userData = { curve, speed: 0.08 + Math.random() * 0.08, phase: Math.random(), isOut };
      streamGroup.add(p);
      particles.push(p);
    };

    for (let i = 0; i < 13; i += 1) {
      const angle = (i / 13) * Math.PI * 2;
      makeStream(angle, i > 7 ? 4.6 : 4.15, i % 5 === 0 ? amber : i % 4 === 0 ? mint : i % 3 === 0 ? teal : cyan, i > 7);
    }

    const pointGeometry = new THREE.BufferGeometry();
    const pointCount = 420;
    const positions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i += 1) {
      const radius = 2.2 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.58;
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.26;
    }
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointMaterial = new THREE.PointsMaterial({
      color: cyan,
      transparent: true,
      opacity: 0.3,
      size: 0.025,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(points);

    let pointerX = 0;
    let pointerY = 0;
    const updateSize = () => {
      const rect = wrap.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    const handlePointer = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', handlePointer);

    let frame = 0;
    let rafId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      frame += 1;

      if (!reducedMotion) {
        root.rotation.y += (pointerX * 0.12 - root.rotation.y) * 0.035;
        root.rotation.x += (-pointerY * 0.08 - root.rotation.x) * 0.035;
        coreMesh.rotation.y = elapsed * 0.18;
        coreMesh.rotation.x = elapsed * 0.08;
        inner.scale.setScalar(1 + Math.sin(elapsed * 1.6) * 0.045);
        glow.scale.setScalar(1.08 + Math.sin(elapsed * 1.2) * 0.08);
        rings.forEach((ring, index) => {
          ring.rotation.z += (index % 2 === 0 ? 1 : -1) * (0.0018 + index * 0.0008);
          ring.rotation.x += 0.0009;
        });
        shield.rotation.z -= 0.001;
        points.rotation.y += 0.0009;
        particles.forEach((particle, index) => {
          const progress = (elapsed * particle.userData.speed + particle.userData.phase) % 1;
          const position = particle.userData.curve.getPoint(progress);
          particle.position.copy(position);
          particle.scale.setScalar(0.8 + Math.sin(elapsed * 4 + index) * 0.22);
        });
        streams.forEach((stream, index) => {
          const material = stream.material as THREE.LineBasicMaterial;
          material.opacity = (index > 7 ? 0.28 : 0.18) + Math.sin(elapsed * 1.4 + index) * 0.06;
        });
      } else if (frame < 2) {
        particles.forEach((particle) => {
          const position = particle.userData.curve.getPoint(0.5);
          particle.position.copy(position);
        });
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('pointermove', handlePointer);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      pointGeometry.dispose();
      pointMaterial.dispose();
      streams.forEach((stream) => {
        stream.geometry.dispose();
        (stream.material as THREE.Material).dispose();
      });
      particles.forEach((particle) => {
        particle.geometry.dispose();
        (particle.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div className="hero-core" ref={wrapRef} aria-label="Governed Intelligence Core visualization">
      <canvas ref={canvasRef} />
      <div className="core-label core-label-center">Governed Intelligence Core</div>
      <div className="core-labels" aria-hidden="true">
        {labels.map((label, index) => (
          <span key={label.name} className={`core-chip core-chip-${label.side} core-chip-${index}`}>
            {label.name}
          </span>
        ))}
      </div>
    </div>
  );
}
