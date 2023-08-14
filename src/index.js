const express=require("express");
const app=express();
const portnum=3002;

const studentslist=[
    {
        name:"Priya",
        age:19
    },
    {
        name:"Kavi",
        age:20
    }
]

app.use(express.json())

app.listen(portnum,()=>{console.log(`Server is running on port number: ${portnum}`)});

app.get('/namelist',(request,response)=>
{
    response.send(studentslist);
});


app.post('/namelist',(request,response)=>{
    console.log(request.body);
    studentslist.push(request.body);
    response.send(studentslist);
    response.send(201)
})
