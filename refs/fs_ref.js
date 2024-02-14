const path = require('path')
const fs = require('fs')
// File System

// ассинхронные и синхронные методы
// синхронные не рекомендованы -  блокируют поток, остановка программы пока не выполнится 

// создать папку notes
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     // if(err) throw new Error(err)      -- как вариант выброса ошибки  
//     if(err) throw new err          // ошибка если такая папка уже есть
//     console.log('папка была создана')  //сработвет если не будет вывода ошибки
// })
// mkdir - 2 параметра: 
// 1 -- путь к новой папке с указанием ее названия
// 2 -- callback - который аргументом принимает ошибку

// Создаем файл
// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'), 
//     'Hello world!',
//     err => {
//         if(err) throw err
//         console.log('файл создан, инфа записана')
//         // можно дописывать в файл
//         fs.appendFile(                              // инфа допишется в одну строку с тем что было
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' дописаная инфа',
//             err => {
//                 if(err) throw err
//                 console.log('инфа была дописана!')
//             }
            
//             )
//     }
//     )
// writeFile - 3 параметра
// 1 -- путь к создаваемоему файлу с указанием названия файла
// 2 -- то что мы хотим записать в файл
// 3 -- callback ошибки
// повторное создание файла не выбросит ошибки

// Чтение файла
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'UTF-8',
//     (err, data) => {
//         if(err) throw err
//         // console.log(data)  -- получим хуйню - буфер, если вторым параметром не указана кодировка UTF-8
//         //console.log(Buffer.from(data).toString())  // используем когда 2 параметром не указываем UTF-8 получим строку с данными
//         console.log(data)
//     } 
//     )
// от чтения получим вот такую хуйню
// <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21 20 d0 b4 d0 be d0 bf d0 b8 d1 81 d0 b0 d0 bd d0 b0 d1 8f 20 d0 b8 d0 bd d1 84 d0 b0>

// readFile - чтоние файла, имеет 3 параметра
// 1 -- путь к файлу
// 2 -- кодировка UTF-8
// 3 - callback который принимает ошибку и данные

// ПРИ АССИНХРОННОЙ ЗАПИСИ И ЧТЕНИИ - СНАЧАЛА МОЖЕТ ПРОЧИТАТЬСЯ, А ПОТОМ ЗАПИШЕТСЯ

// Переименование файла
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if(err) throw err
        console.log('файл переименован!')
    }
)
// rename - переименование файла -- 3 параметра
// 1 -- путь к файлу
// 2 -- путь к файлу с новым именем
// 3 -- callback ошибки



