const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message){
        this.emit('message', `${message} ${Date.now()}`)
    }
}
const logger = new Logger()

// срабатывает когда работает emit?
logger.on('message', data => {
    console.log(data)
})

logger.log('Hello')  //Hello 1708430564248

// еще пример

const liga = new EventEmitter()     //сщздали экземпляр класса
liga.on('sss', data => {            //установили слушатель на событие sss и указали какая функция сработает при таком событии
    console.log(data)
})
liga.emit('sss', 'Хорошего дня')    // вызвалли событие с названием sss
