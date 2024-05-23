 # node-server01

Тестовый сервер на Node.js

Запуск: `node server.js`

Запускается на `localhost:3000`

Поддерживает следующие запросы:
- GET `localhost:3000/users`
- GET `localhost:3000/users/id`
- POST `localhost:3000/users`
- DELETE `localhost:3000/users/id`
- PUT `localhost:3000/users/id`

, где `id` - идентификатор пользователя

Никакая база данных не подключена - при перезапуске данные пользователей удяляются