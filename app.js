
// multiple variables in console.log
// const x = "x";
// const y = "y";
// console.log(x, y);

// format specifier in console.log
// console.log("Learning %s %dnd time", "Node.js", 2);
// console.log("%o", Number);

// console.clear();

// count the number of times a string is printed
// const oranges = ['orange', 'orange']
// const apples = ['just one apple']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// reset the count
// console.countReset('orange')

// oranges.forEach(fruit => {
//   console.count(fruit)
// })

// print call stack trace of a function
// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// measure time of a function execution
// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

// color the output
// const chalk = require('chalk')
// console.log(chalk.yellow('hi!'))

// import { yellow } from 'chalk'
// console.log(yellow('hi!'))

// accept arguements from command line
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
// })

// const args = process.argv.slice(2)
// console.log(args[0])

// const args = require('minimist')(process.argv.slice(2))
// console.log(args['name'])

// create a progress bar
// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)

// accept input from command line
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
// readline.question(`What's your name? `, name => {
// console.log(`Hi ${name}!`)
// readline.close()
// })
  
// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })

// expose functionality using exports
// const car = {
//     brand: 'Ford',
//     model: 'Fiesta'
//   }

// module.exports = car

// exports.car = {
//     brand: 'Ford',
//     model: 'Fiesta'
//   }
  
  