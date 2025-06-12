// server/index.ts
import express from 'express'
import path from 'path'
import fs from 'fs'

async function startServer() {
  const app = express()
  let viteDevServer: any

  if (process.env.NODE_ENV !== 'production') {
    // só importa o Vite em dev
    const { createServer } = await import('vite')
    viteDevServer = await createServer({
      server: { middlewareMode: 'ssr' }
    })
    app.use(viteDevServer.middlewares)
  } else {
    // em prod, serve só os estáticos gerados
    app.use('/', express.static(path.resolve(__dirname, 'public')))
  }

  app.use('*', async (req, res) => {
    try {
      let template: string
      if (process.env.NODE_ENV !== 'production') {
        template = await viteDevServer.transformIndexHtml(
          req.originalUrl,
          fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8')
        )
      } else {
        template = fs.readFileSync(
          path.resolve(__dirname, 'public/index.html'),
          'utf8'
        )
      }

      // importe aqui seu entry-server roteado
      const { render } = await import('./server/entry-server.js')
      const appHtml = await render(req.originalUrl)

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: any) {
      viteDevServer?.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`> Server running on http://localhost:${port}`)
  })
}

startServer()
