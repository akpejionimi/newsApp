require("dotenv").config();
const express = require ("express");
const sequelize = require ("./config/database");
const addNewsRoute = require ("./routes/addnews");
const homeRoute = require ("./routes/home");

const app = express();
app.set("view engine","pug"); 

app.use(express.urlencoded({extended:false}));


app.use(addNewsRoute)
app.use(homeRoute)

sequelize.sync()
    .then(()=> {
        app.listen(3000,()=> console.log("listening at port 3000"));

    })
    .catch(err => {
        console.log("error",err)
    })



