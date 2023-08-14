const {Router}=require("express");
const router=Router();

const bookslist=[
    {
        book:"Wings Of Fire",
        author:"Abdul Kalam"
    },
    {
        book:"Queen Of Fire",
        author:"Devika Rangachari"
    }
]


router.get("/booklist",(req,res)=>{
    res.send(bookslist)
});
router.post('/booklist',(request,response)=>{
    console.log(request.body);
    bookslist.push(request.body);
    response.send(bookslist);
    response.send(201);
})

module.exports = router;

