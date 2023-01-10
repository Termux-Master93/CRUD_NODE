const express=require('express');
const morgan=require('morgan');
const path=require('path');
const mysql=require('mysql');
const myConnection=require('express-myconnection');
const app=express();

//settings
app.set('port', process.env.PORT || 3000); //puerto
app.set('view engine', 'ejs'); //vistas
app.set('views',path.join(__dirname,'views')) //rutas a vi9stas


//milddelwares
app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    bd: 'bd_users',

},'single'))

//routes

app.listen(app.get('port'), ()=>{
    console.log("carjo")
})