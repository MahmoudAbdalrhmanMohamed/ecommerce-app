import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Ecommerce App',
        theme_color: '#0f172a',
        icons: [
          {
            src: './44x44.png',
            sizes: '44x44',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './50x50.png',
            sizes: '50x50',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './71x71.png',
            sizes: '71x71',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './150x150.png',
            sizes: '150x150',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './310x310.png',
            sizes: '310x310',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './350x150.png',
            sizes: '350x150',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: './620x300.png',
            sizes: '620x300',
            type: 'image/png',
            purpose: 'any'
          },
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
        sourcemap: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
