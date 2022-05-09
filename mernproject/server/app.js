const dotenv = require('dotenv');
const mongoose = require ('mongoose');
const express = require ('express');
const app = express ();


dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE;


mongoose.connect(DB ,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    
}).then(()=>{
    
    console.log(`connection successful`);

} ).catch((err)=> console.log(`no connection`));

//middleware

const middleware = (req,res,next) => {
    console.log('hello middleware');
    next();
};


app.get('/', (req,res)  => {
 res.send('HEllO world from the server');
});

app.get('/about',middleware, (req,res)  => {
console.log('hello middleware about ')
 res.send('HEllO world from the about');
 
});

app.get('/contact', (req,res)  => {
 res.send('HEllO world from the contact');
});

app.get('/signin', (req,res)  => {
 res.send('HEllO world from the login');
});

app.get('/signup', (req,res)  => {
 res.send('HEllO world from the signup');


});
app.listen(3000);
console.log('hello console');


