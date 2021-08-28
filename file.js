const fs = require('fs')

// fs.open('test.txt', 'r', (err, fd) => {
//     //fd is our file descriptor
//     console.log(fd);
// })


// try {
//   const fd = fs.openSync('test.txt', 'r');
//   console.log(fd);
// } catch (err) {
//   console.error(err)
// }


// fs.stat('test.txt', (err, stats) => {
//     if (err) {
//         console.error(err);
//         return;
//     };

//     // console.log(stats);
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.size);
// })


// Reading a file
// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

// try {
//   const data = fs.readFileSync('test.txt', 'utf8')
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }


// Writing to a file
// const content = 'Some content!'

// try {
//   const data = fs.writeFileSync('test.txt', content);
//   //file written successfully
// } catch (err) {
//   console.error(err);
// }

// Appending to a file
// const content = 'Some content!'

// try {
//   const data = fs.writeFileSync('test.txt', content);
//   //file written successfully
// } catch (err) {
//   console.error(err);
// }