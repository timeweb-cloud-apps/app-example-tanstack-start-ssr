import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () =>
        Response.json({
          message: 'Привет с API TanStack Start (выполняется на сервере)',
          at: new Date().toISOString(),
        }),
    },
  },
})
