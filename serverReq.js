const https = require('https');

// GET request
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     port: 443,
//     path: '/todos/1',
//     method: 'GET'
// };

// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on('data', d => {
//     process.stdout.write(d);
//     })
// });

// req.on('error', error => {
//     console.error(error);
// });

// req.end();

// POST request
// const data = new TextEncoder().encode(
//     JSON.stringify({
//         userId : 11,
//         title : "This is new title",
//         completed : true
//     })
// )
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     port: 443,
//     path: '/todos',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// };

// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`);
  
//     res.on('data', d => {
//         process.stdout.write(d);
//     });
// });
  
// req.on('error', error => {
//     console.error(error);
// });
  
// // req.write(data);
// req.end();

// PUT request
// const data = new TextEncoder().encode(
//     JSON.stringify({
//         userId : 100,
//         title : "This is new title",
//         completed : true
//     })
// )
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     port: 443,
//     path: '/todos/1',
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// };

// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`);
  
//     res.on('data', d => {
//         process.stdout.write(d);
//     });
// });
  
// req.on('error', error => {
//     console.error(error);
// });
  
// // req.write(data);
// req.end();

// DELETE request
// const options = {
//     hostname: 'jsonplaceholder.typicode.com',
//     port: 443,
//     path: '/todos/1',
//     method: 'DELETE'
// };

// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`);
  
//     res.on('data', d => {
//         // process.stdout.write(d);
//         process.stdout.write('DELETED');
//     });
// });
  
// req.on('error', error => {
//     console.error(error);
// });
  
// // req.write(data);
// req.end();


// Get HTTP request body data
// const server = http.createServer((req, res) => {
//     // we can access HTTP headers
//     req.on('data', chunk => {
//         console.log(`Data chunk available: ${chunk}`);
//     });
//     req.on('end', () => {
//         //end of data
//     });
// }); 