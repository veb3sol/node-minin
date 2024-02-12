const userObj = require('./user')

//console.log(userObj)      // { name: 'Елена', age: 25 }

// если мы сформировали обьект и экспортировали 
console.log(userObj.user)       //{ name: 'Елена', age: 25 }
userObj.sayHello()          //Hello, user