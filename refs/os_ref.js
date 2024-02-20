const os = require('os')

// платформа компа - какая ОС
console.log(os.platform())  // win32    darwon - mac

// архитектура
console.log(os.arch())  // x64

// инфа о компе
console.log(os.cpus())  // состояние компа - по ядрам?


//   свободная память
console.log(os.freemem()) //2966577152

// всего памяти
console.log(os.totalmem()) //8458571776

// корневая дериктория на этом компе
console.log(os.homedir()) //C:\Users\Ruslan_WORK

// сколько система работает
console.log(os.uptime())  //352565.187 - результат в мили сек

//имя операционной системы
console.log(os.type()) //Windows_NT

//информацию о текущем действующем пользователе
console.log(os.userInfo())
