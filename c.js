// marks 20%
const fetch = require('node-fetch');
const cheerio = require('cheerio');
// node-fetch is a library that allows you to make http requests in node. It's already listed in the package.json so just run `npm i` to install it
// install the cheerio library and use it to get all the text within every anchor tag at this URL: http://home.mcom.com/home/welcome.html

function c() {
  return fetch('http://home.mcom.com/home/welcome.html')
    .then(res => res.text())
    .then((html, response) => { 
      const $ = cheerio.load(response)
      //const anchorTag = $("a");
      links = $('a'); //jquery get all hyperlinks
      $(links).each(function(i, link){
        console.log($(link).text() + ':\n  ' + $(link).attr('href'));
      });
      
      console.log(html); // html. run `node c.js` to see what html looks like.
      // your code here
      
     
    });
}
console.log(c())

module.exports = c;
