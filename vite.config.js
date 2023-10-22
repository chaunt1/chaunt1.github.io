import path from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export const aliases = {
  '@': path.resolve(__dirname, 'src'),
  '@providers': path.resolve(__dirname, 'src/providers'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@config': path.resolve(__dirname, 'src/config'),
  '@constants': path.resolve(__dirname, 'src/constants'),
  '@hooks': path.resolve(__dirname, 'src/hooks'),
  '@layout': path.resolve(__dirname, 'src/layout'),
  '@pages': path.resolve(__dirname, 'src/pages'),
  '@services': path.resolve(__dirname, 'src/services'),
  '@styles': path.resolve(__dirname, 'src/styles'),
  '@utils': path.resolve(__dirname, 'src/utils'),
  '/^~/': '',
};

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
    port: 8080,
  },
  preview: {
    open: true,
    port: 80,
  },
  envPrefix: 'chaunt',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],
    alias: aliases,
  },
  build: {
    sourcemap: !process.env.NODE_ENV === 'production',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-i18next', 'react-resize-detector', 'react-router-dom'],
          vendor: ['axios', 'i18next', 'i18next-browser-languagedetector', 'i18next-http-backend', 'js-cookie', 'lodash'],
          // else: use index.[id].js
        },
      },
    },
    terserOptions: {
      format: {
        beautify: false,
      },
      compress: {
        passes: 3,
      },
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|webp|svg)$/i,
    }),
  ],
});
