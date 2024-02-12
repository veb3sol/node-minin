const user = {
    name: 'Елена',
    age: 25
}

//module.exports = user

// можно создавать и экспортировать обьекты
module.exports = {
    user: user,
    sayHello(){
        console.log('Hello, user')
    }
}
