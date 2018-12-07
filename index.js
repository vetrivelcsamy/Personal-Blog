var express = require('express')
var app = express()
app.use(express.static('files'))
app.use('/static', express.static('public'))
app.use(express.static('public'));
app.set("view engine", "ejs");

//index page
app.get('/', function (req, res) {
  res.render('home');
});
//social links route
//github
app.get('/github', function (req, res) {
  res.redirect('https://github.com/vetrivelcsamy');
});
//facebook
app.get('/facebook', function (req, res) {
  res.redirect('https://www.facebook.com/vetrivelcsamy');
});
//twitter
app.get('/twitter', function (req, res) {
  res.redirect('https://twitter.com/vetrivelcsamy');
});
//instagram
app.get('/instagram', function (req, res) {
  res.redirect('https://www.instagram.com/vetrivelcsamy');
});
//behance
app.get('/behance', function (req, res) {
  res.redirect('https://www.behance.net/vetrivelchdbc1');
});
//Google+
app.get('/google+', function (req, res) {
  res.redirect('https://plus.google.com/u/0/117680100082364239531');
});
//not found page
app.get('*', function (req, res) {
  res.render('home');
});

// Node Start Here
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now Your Server Running!");
});