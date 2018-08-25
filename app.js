let express = require('express');
let app = require('express')();
let path = require('path');

let port = process.env.port || 5129;

app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, function (err) {
    if (err) {
      console.log(err);
    } else {
        console.log('running on port: ', port);
     }
  });

module.exports = app; // for testing
