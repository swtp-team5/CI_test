// const http = require('http')
// const fs = require('fs')
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' })
//     fs.createReadStream('../index.html').pipe(res)
// })
//
// server.listen(process.env.PORT || 3000)

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/profile',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/profile.html'));
});

router.get('/history',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/history.html'));
});

router.get('/import',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/import.html'));
});

router.get('/praxis',function(req,res){
    res.sendFile(path.join(__dirname+'/pages/praxis.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000')

