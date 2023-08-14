//Imports
const express = require("express");
const namelist = require("./routes/namelist")
const booklist = require("./routes/booklist")
const langlist = require("./routes/langlist")

//Initializations
const app = express();
const PORT =3005;

//Routes
app.use(express.json());
app.use(namelist);
app.use(booklist);
app.use(langlist);
app.use((req,res,next)=>{
    console.log("Before starting");
    next();
},);



app.listen(PORT,()=>{
    console.log(`Server runs on port number ${PORT}`);
});


app.get("/",
    (req,res,next)=>{
        const coloredHeading = `<h1 style="color: blue;">This is Priya!</h1>`;
        res.send(coloredHeading);
        next();
    },
    
    (req,res)=>{
        console.log("After displaying in the server");
    }
);