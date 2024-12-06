import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      // Evita procesar ciertos módulos problemáticos como `three-stdlib`
      external: ['three-stdlib'],
    },
    chunkSizeWarningLimit: 1000, // Aumenta el límite de tamaño para chunks
  },
  optimizeDeps: {
    esbuildOptions: {
      // Soluciona problemas de minificación relacionados con `eval`
      logOverride: {
        'eval': 'silent', // Silencia la advertencia
      },
    },
  },
});
