const { Router } = require("express");
const router = Router();

const studentslist = [
    {
        name: "Priya",
        age: 19,
        district:"Tiruppur",
        college:"CIT"
    },
    {
        name: "Kavi",
        age: 20,
        district:"Chennai",
        college:"PSG"
    },
    {
        name:"Dharani",
        age:18,
        district:"Trichy",
        college:"GCE"
    }
];

router.get('/namelist', (request, response) => {
    response.send(studentslist);
});

router.get('/namelist/:studentName', (request, response) => {
    const studentName = request.params.studentName;
    const student = studentslist.find(student => student.name === studentName);

    if (student) {
        response.send(student);
    } else {
        response.status(404);
        response.send("<h1>Oops ! Student not found</h>");
    }
});

router.post('/namelist', (request, response) => {
    console.log(request.body);
    studentslist.push(request.body);
    response.status(201);
    response.send(studentslist);
});

module.exports = router;
