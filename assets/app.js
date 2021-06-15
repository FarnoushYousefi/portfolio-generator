// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
// };
// // Is the same as this...
// profileDataArr.forEach((profileItem) => {
//   console.log(profileItem);
// });

// printProfileData(profileDataArgs);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

// console.log(generatePage('Jane', 'janehub'));
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const [name, github] = profileDataArgs;
const fs = require('fs');
fs.writeFile('index.html', generatePage(name, github), (err) => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
