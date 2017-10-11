var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var scrape = require('website-scraper');
var request = require('request');
var iconv = require('iconv-lite');
var charset = require('charset');

var path = 'http://pduch.kis.p.lodz.pl'

scrape({
  urls: [
    path,	// Will be saved with default filename 'index.html'
  ],
  directory: './project1'
})
.then(		
		request.get({
			uri: path,
			encoding: null
		  },
		  function(err, resp, body){ 
			var chars = charset(resp.headers, body);
			console.log(charset(resp.headers, body));
			var bodyWithCorrectEncoding = iconv.decode(body, chars);
			
			fs.writeFile("./test.txt", bodyWithCorrectEncoding, function(err) {
				if(err) {
					return console.log(err);
				}
				  console.log("The file was saved!");
			}); 
			
			clean = sanitizeHtml(bodyWithCorrectEncoding, {
			allowedTags: [],
			allowedAttributes: [] 
			});
			    fs.writeFile("./clean.txt", clean.replace(/[.@,\/#!$%\^&\*;:{}=\-_`~(+)]/g,"").toLowerCase(), function(err) {
			if(err) {
				return console.log(err);
			}
				console.log("The clean text was saved!");
			});
		  }
		)
	)
	.catch(console.log('No error'));