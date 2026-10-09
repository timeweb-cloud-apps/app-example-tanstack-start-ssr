import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

/* Серверная функция выполняется только на сервере, в браузер уходит её результат */
const getServerInfo = createServerFn({ method: 'GET' }).handler(() => ({
  renderedAt: new Date().toISOString(),
  nodeVersion: process.version,
  userAgent: getRequestHeader('user-agent') ?? '—',
}))

export const Route = createFileRoute('/')({
  loader: () => getServerInfo(),
  component: Home,
})

function Home() {
  const info = Route.useLoaderData()

  return (
    <>
      <h1>Главная</h1>
      <p className="lead">
        Эта страница рендерится на сервере (SSR) при каждом запросе.
      </p>

      <dl className="info">
        <dt>Время рендера</dt>
        <dd>
          <code>{info.renderedAt}</code>
        </dd>
        <dt>Node.js</dt>
        <dd>
          <code>{info.nodeVersion}</code>
        </dd>
        <dt>User-Agent</dt>
        <dd>
          <code>{info.userAgent}</code>
        </dd>
      </dl>

      <p>
        Обновите страницу — время рендера изменится. Пример API-эндпоинта:{' '}
        <a href="/api/hello">/api/hello</a>.
      </p>
    </>
  )
}
