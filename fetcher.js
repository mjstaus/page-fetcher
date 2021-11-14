///// FUNCTION DESCRIPTION /////
//Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2);

const fetcher = (url, path) => {
  request(`${url}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    
    if(!error){
      fs.writeFile(path, body, 'utf8', (err) => {
        if (err) throw err;
        // console.log(`Downloaded and saved to ${path}`)
      })
    }
  });
};

fetcher(url, './index.html');

/* 
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) {
      functionToRunWhenThingsAreDone(data)
    };
  })
};
const printCatBreed = breed => {
  console.log('Return value: ', breed )
}

const bombay = breedDetailsFromFile('Bombay', printCatBreed);
console.log('Return Value: ', bombay); */
