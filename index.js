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
app.listen(process.env.PORT || 5000);

console.log('Running...')

