const fs = require('fs');

const path = 'person.json'

const person = {
    name: "Jason",
    surname: "Statham",
    age: 22
};

fs.writeFile(path, JSON.stringify(person), (err) => {
    if (err) throw err;
    console.log('Objeto guardado en person.json');
    
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        const obj = JSON.parse(data);
        console.log(obj);
    });
});

