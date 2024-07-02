const fs = require('fs/promises');
const path = 'person.json'; 

let person = {
    name: "Jason",
    surname: "Statham",
    age: 22
};

(async () => {
    try {
        await fs.writeFile(path, JSON.stringify(person));
        console.log('Objeto guardado en person.json');
        
        let data = await fs.readFile(path, 'utf8');
        
        let obj = JSON.parse(data);
        
        console.log(obj);
    } catch (err) {
        console.error('Error:', err);
    }
})();
