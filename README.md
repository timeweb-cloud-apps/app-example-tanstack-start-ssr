![TanStack Start Logo](https://st.timeweb.com/cloud-static/apps-logo/tanstack.svg)

# TanStack Start SSR

Пример приложения [TanStack Start](https://tanstack.com/start) с серверным рендерингом (SSR), которое можно развернуть в **Timeweb Cloud Apps** без настройки.

:tada: [Демо]

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Параметры деплоя

При создании приложения включите поддержку SSR — оно развернётся как backend на Node.js.

| Параметр        | Значение                     |
| --------------- | ---------------------------- |
| Фреймворк       | TanStack Start, SSR включён  |
| Команда сборки  | `npm run build`              |
| Команда запуска | `node dist/server/server.js` |

Сборка TanStack Start на Vite выдаёт в `dist/server/server.js` только fetch-обработчик, без HTTP-сервера. Поэтому в примере есть своя серверная точка входа [`src/server.ts`](src/server.ts): при запуске через `node` она поднимает сервер на [srvx](https://srvx.h3.dev/), отдаёт статику из `dist/client`, а остальные запросы передаёт в SSR. Сервер слушает все интерфейсы, порт по умолчанию — `3000`, его можно изменить переменной окружения `PORT`.

Статическая версия — [app-example-tanstack-start](https://github.com/timeweb-cloud-apps/app-example-tanstack-start).

## Что показывает пример

- `/` — страница рендерится на сервере при каждом запросе: время рендера, версия Node.js и `User-Agent` приходят из серверной функции (`createServerFn`) и уже подставлены в HTML.
- `/about` — вторая страница приложения.
- `/api/hello` — серверный маршрут, отдаёт JSON.

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
npm install

# запуск в дев режиме с отслеживанием изменений
npm run dev

# сборка для продакшн
npm run build

# запуск собранного приложения
npm run start
```
