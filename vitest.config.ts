import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: '/src/__tests__/setup.ts',
    globals: true,
    coverage: {
      include: ['src/**/*'],
    },
  },
});
