// Marks 20%

// The ./libs directory contains a random amount of directories and files.
// write a function to count the number of directories and files and 
// returns a promise that resolves to an object with keys `files` for number of files and `directories` for number of directories.

// documentation for fs https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

var fs = require('fs'); 
 function count(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = count(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(file)
    }
  })

  return arrayOfFiles
  

}
const countFile = count("./books").length
//
console.log(countFile);
//console.log(coundtDir);
module.exports = count;


