var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World kaveh is here the king of all 2021 is the year of leave and success !\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

