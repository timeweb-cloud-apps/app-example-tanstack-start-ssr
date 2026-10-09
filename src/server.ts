import { realpathSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import handler, { createServerEntry } from '@tanstack/react-start/server-entry'
import { serve } from 'srvx'
import { staticMiddleware } from 'srvx/static'

const entry = createServerEntry({
  fetch(request) {
    return handler.fetch(request)
  },
})

export default entry

/*
 * После сборки этот файл становится dist/server/server.js. При запуске напрямую
 * (`node dist/server/server.js`) поднимаем HTTP-сервер: статика отдаётся из dist/client,
 * остальные запросы уходят в SSR-обработчик. В `vite dev` и `vite preview` файл только
 * импортируется, и сервер здесь не стартует.
 *
 * Порт берётся из переменной PORT (по умолчанию 3000), сервер слушает все интерфейсы.
 */
const isEntryPoint =
  process.argv[1] !== undefined &&
  realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)

if (isEntryPoint) {
  serve({
    fetch: entry.fetch,
    middleware: [
      staticMiddleware({
        dir: fileURLToPath(new URL('../client', import.meta.url)),
      }),
    ],
  })
}
