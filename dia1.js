//RETO 1
// setTimeout(() => {
//     console.log("mensaje 1")
//     setTimeout(() => {
//         console.log("mensaje 2")
//         console.log("mensaje 3")
//     }, 3000)
// });


//RETO2

// let fs = require ("fs");

// let objeto = {
//     name: "Jan",
//     surname: "Jose",
//     age: "22"
// }

// fs.writeFile("objeto.json", JSON.stringify(objeto), (err)=>{
//     if(err){
//         throw err}
//         else{
//             console.log("objeto creado")
//         }
//     })

//     fs.readFile("objeto.json", "utf-8",(err,contenido) => {
//         if(err){
//             throw err
//         }else{
//             console.log(contenido)
//         }
//     })

//RETO3

let objeto = {
    name: "",
    surname: "",
    age: [],
}


let readline = require('readline');

let rl = readline.createInterface(
    process.stdin, process.stdout);


let fs = require("fs")

rl.question('¿Cual es tu nombre?', (name) => {
    console.log('Tu nombre es: ' + name);
    objeto.name = name;
    rl.question('¿Cual es tu apellido?', (surname) => {
        console.log('Tu apellido es: ' + surname);
        objeto.surname = surname;
        rl.question('¿Cual es tu edad?', (age) => {
            console.log('Tu edad es: ' + age);
            objeto.age = age;
            rl.close();
            fs.writeFile("objeto.json", JSON.stringify(objeto), (err) => {
                fs.readFile("objeto.json", "utf-8", (err, objeto) => {
                    console.log(JSON.parse(objeto));
                })


            })
        })
    })
})