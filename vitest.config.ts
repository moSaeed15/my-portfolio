import { defineConfig, defaultExclude } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: '/src/__tests__/setup.ts',
    globals: true,
    // exclude playwright tests from coverage
    exclude: [...defaultExclude, '/tests'],
    include: [
      'src/__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)', // Ensure this path correctly includes Vitest tests
    ],
    coverage: {
      include: ['src/**/*'],
      all: true,
      exclude: [
        'test/**',
        'vite.*.ts',
        '**/*.d.ts',
        '**/*.test.*',
        '**/*.config.*',
        '**/snapshot-tests/**',
        '**/*.solution.tsx',
        '**/coverage/**',
      ],
    },
  },
});
