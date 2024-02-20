const http = require('http')

// создаем сервер
const server = http.createServer((req, res) => {
    console.log(req.url)                // выводим полученный относительный url запроса - их 2 '/'  'favicon.ico'


    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    
    res.write('Helllooooo')             // отвечаем фразой
    res.write(`<h1>Заголовок главный88888</h1>`)             // отвечаем фразой
    res.write(`<h2>Второй заголовок</h2>`)             // отвечаем фразой
    res.end()                           // закрываем соединение
})

server.listen(3000, () => {                         // устанавливаем слушатель
    console.log('Server is runing....')             // когда запустится сервер - сработает функция
})