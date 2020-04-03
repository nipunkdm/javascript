const student = [
    {id:1, name:"maria"},
    {id:2, name:"salam"},
    {id:3, name:"karim"},
    {id:4, name:"rahim"},
    {id:5, name:"victoria"},
]

const name = student.map(s=> s.name);
const bigger = student.filter(s=>s.id>3);
console.log(bigger);