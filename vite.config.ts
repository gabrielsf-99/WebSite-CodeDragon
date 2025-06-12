// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

export default defineConfig(async ({ mode }) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname  = dirname(__filename)

  const plugins = [
    react(),
    runtimeErrorOverlay()
  ]

  if (mode !== 'production' && process.env.REPL_ID) {
    const { cartographer } = await import('@replit/vite-plugin-cartographer')
    plugins.push(cartographer())
  }

  return {
    root: resolve(__dirname, 'client'),
    plugins,
    resolve: {
      alias: {
        '@':       resolve(__dirname, 'client', 'src'),
        '@shared': resolve(__dirname, 'shared'),
        '@assets': resolve(__dirname, 'attached_assets'),
      }
    },
    build: {
      outDir:      resolve(__dirname, 'dist/public'),
      emptyOutDir: true
    },
    server: {
      fs: {
        // permita acessar pastas acima de `client` em dev
        allow: [
          resolve(__dirname, 'shared'),
          resolve(__dirname, 'attached_assets')
        ]
      }
    }
  }
})
