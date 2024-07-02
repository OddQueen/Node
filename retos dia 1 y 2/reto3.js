const fs = require('fs/promises');
const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

(async () => {
  try {
      let person = {};
      person.name = await rl.question('Name: ');
      person.surname = await rl.question('Surname: ');
      person.age = await rl.question('Age: ');
      
      await fs.writeFile('person.json', JSON.stringify(person));
      console.log('Guardado en fichero person.json');
      
      let data = await fs.readFile('person.json', 'utf8');
      let obj = JSON.parse(data);
      
      console.log('Leído de fichero person.json:', obj);
      
      rl.close(); 
  } catch (err) {
      console.error('Error:', err);
  }
})();