const {Router}=require("express");
const router=Router();

const languagelist=[
    {
        lang:"C++"
    },
    {
        lang:"Python"
    },
    {
        lang:"Java"
    }
]

router.get('/langlist',(request,response)=>
{
    response.send(languagelist);
});


router.post('/langlist',(request,response)=>{
    console.log(request.body);
    languagelist.push(request.body);
    response.send(languagelist);
    response.send(201);
})

module.exports = router;


