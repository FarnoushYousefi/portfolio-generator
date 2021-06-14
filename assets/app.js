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

const generatePage = (userName, githubName) =>
  `Name: ${userName}, Github: ${githubName}`;
console.log(generatePage('Jane', 'janehub'));
