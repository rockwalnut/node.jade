var express = require('express');
var app = express();
var path = require('path');

// ฟังค์ชัน สำหรับรับ request จาก client และส่ง response กลับไปยัง client
// req คือ request และ res คือ response
// res.send('') คือการส่ง response กลับไป
function  getIndexPage(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html') );
}

 
// รับ request จาก client เมื่อ access เข้าหน้า /about และส่ง response กลับ
function getAboutPage(req, res) { 
     res.sendFile(path.join(__dirname + '/partial/about.html') );  
}

function getHomePage(req, res) { 
    res.sendFile(path.join(__dirname + '/partial/home.html') );  
}

function getRegisterPage(req, res) { 
    res.sendFile(path.join(__dirname + '/partial/register.html') );  
}


function getAuthorPage(req, res) { 

    res.sendFile(path.join(__dirname + '/author.html') ); 
}


//public directory serving the static files
app.use(express.static(__dirname + '/public'));

app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/async/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/scripts', express.static(__dirname + '/node_modules/hogan.js/dist/'));
//app.use(express.static(__dirname + '/css'));

// เมื่อ client เข้าถึงหน้า Home Page ของเว็บไซต์ http://localhost:5555/
// app.get(URL, getHomePage)
// URL - คือ PATH ของเว็บไซต์
// getHomePage คือ callback function ที่มี request และ response
app.get('/index', getIndexPage);
app.get('/', getIndexPage);
 
// call ฟังค์ชัน getAboutPage เมื่อ client เข้าถึงหน้าเว็บ /about
app.get('/partial/about', getAboutPage)
app.get('/about', getAboutPage);

//get index 
app.get('/partial/home', getHomePage);
app.get('/home', getHomePage);

//register
app.get('/partial/register', getRegisterPage);
app.get('/register', getRegisterPage);
 
//author
app.get('/author', getAuthorPage);
 
 
// start server ด้วย port 5555
var server = app.listen(5555, function() {
    console.log('Express is running on port 5555.');
});