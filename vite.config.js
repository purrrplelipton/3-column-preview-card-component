import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, '/src/assets'),
      '@components': resolve(__dirname, '/src/components'),
    },
  },
});
