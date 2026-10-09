import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [{ title: 'О проекте — TanStack Start SSR' }],
  }),
  component: About,
})

function About() {
  return (
    <>
      <h1>О проекте</h1>
      <p>
        Базовое приложение на{' '}
        <a
          href="https://tanstack.com/start"
          target="_blank"
          rel="noopener noreferrer"
        >
          TanStack Start
        </a>{' '}
        с серверным рендерингом. Маршруты из папки <code>src/routes/</code>{' '}
        подключаются автоматически, а Node.js-сервер описан в{' '}
        <code>src/server.ts</code>.
      </p>
    </>
  )
}
