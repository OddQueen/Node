const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitud(callback) {
  const person = {};

  rl.question('Name: ', (name) => {
    person.name = name;

    rl.question('Surname: ', (surname) => {
      person.surname = surname;

      rl.question('Age: ', (age) => {
        person.age = age;

        callback(person);
      });
    });
  });
}

function guardar(person, callback) {
  fs.writeFile('person.json', JSON.stringify(person), (err) => {
    if (err) {
      console.error('Error guardar:', err);
      return;
    }
    console.log('Guardado en fichero person.json');
    callback();
  });
}

function leer(callback) {
  fs.readFile('person.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error leer:', err);
      return;
    }
    const person = JSON.parse(data);
    console.log('Leído de fichero person.json:', person);
    callback();
  });
}

solicitud((person) => {
  guardar(person, () => {
    leer(() => {
      rl.close(); 
    });
  });
});
