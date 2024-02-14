const path = require('path')  // для работы с путями

// __filename - абслолютный путь к этому файлу
console.log(path.basename(__filename))  // path_ref.js  -- забирает название этого файла с абсолютного пути

console.log(path.dirname(__filename))  // E:\KURSY\JS\projects\node-minin\refs  -- в какой папке этот файл

console.log(path.extname(__filename))  // .js  -- расширение этого файла

// Для того что бы пользоваться путем к файлу как обьектом --
console.log(path.parse(__filename))
// получаем обьект:
// {
//     root: 'e:\\',     территория root - диск на котором этот файл
//     dir: 'e:\\KURSY\\JS\\projects\\node-minin\\refs',    название папки
//     base: 'path_ref.js',             название файла 
//     ext: '.js',                      расширение 
//     name: 'path_ref'                 название файла без расширения
//   }
console.log(path.parse(__filename).ext)  // .js получаем расширение

// для соединения неограниченого количества строк в путь
console.log(path.join(__dirname, 'test', 'second.html')) // e:\KURSY\JS\projects\node-minin\refs\test\second.html
console.log(path.join(__dirname, '..\\ter', 'second.html')) // e:\KURSY\JS\projects\node-minin\ter\second.html

// еще метод для формирования пути
console.log(path.resolve(__dirname, 'test', 'second.html')) // то же самое
console.log(path.resolve(__dirname, 'test', '/second.html')) // e:\second.html  -- абсолютный путь




