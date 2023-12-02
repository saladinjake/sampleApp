/*Load compiled build files on local server */
const express = require('express');
const path = require('path');
var fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8000;

const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyConfig = {
  target: "https://fe-task-api.mainstack.io",
  prependPath: true,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api/*': '/',
  },
};

//const cors = require("cors");

app.use(express.static(`${__dirname}/build/`));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});







// app.set('views', __dirname + '/build');

// app.get('*', function(request, response) {
//   response.render('index.html');
//   //res.sendFile(path.resolve(__dirname, './build/index.html'));
// });

app.listen(PORT , function() {
  if (process.env.DYNO) {
    console.log('This service is only available on heroku..!!');
    // fs.closeSync(fs.openSync('/tmp/app-initialized', 'w'))
  }
  console.log('Node app is running on port', process.env.PORT ||PORT);
});


module.exports=app;
