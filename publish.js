var ghpages = require('gh-pages');
var path = require('path');
 

var uncss = require('uncss')
var glob = require('glob')
var fs = require('fs')

var stylesheetLocation = '_site/css/'
var stylesheetSourceLocation = '_site/css/'
var stylesheetName = 'main.css'

var jekyllUncss = function() {
  var css = fs.readFileSync(stylesheetLocation + stylesheetName, 'utf8')

  glob('_site/**/*.html', function(err, files) {
    if (err) {
      console.log(err)
    }

    uncss(files, {
      raw: css,
      ignoreSheets:[/(\/css\/|fonts.googleapis)/]
    }, function(err, output) {
      if (err) {
        console.log(err);
        return;
      }

      fs.writeFileSync(stylesheetSourceLocation + stylesheetName, output);
      ghpages.publish(path.join(__dirname, '_site'));
    })
  })
}

jekyllUncss()