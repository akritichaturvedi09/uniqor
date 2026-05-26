import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        uniqor: {
          void: '#040B14',
          night: '#081420',
          graphite: '#0D1F2E',
          cyan: '#21D4FD',
          teal: '#28E0B9',
          mint: '#A7F3D0',
          amber: '#F6C85F',
          risk: '#FF6B5F',
          white: '#F5FAFF',
          slate: '#9FB5C8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Neue Haas Grotesk', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'Neue Haas Grotesk', 'IBM Plex Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        intelligence: '0 0 80px rgba(33, 212, 253, 0.22)',
        governance: '0 0 64px rgba(40, 224, 185, 0.18)',
        amber: '0 0 52px rgba(246, 200, 95, 0.14)'
      }
    }
  },
  plugins: []
};

export default config;
