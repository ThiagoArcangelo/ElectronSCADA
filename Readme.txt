//Definindo banco de dados

/*const path = require('path');
const low = require('lowdb');

//Método Sincrono

const fileSync = require('lowdb/adapters/FileSync');
const adapter = new fileSync(path.join('data', 'db.json'));
const db = low(adapter);

db.defaults ({
    tempo: []
}).write();

let today = {
    data: '2021',
    sensor1: '10°',
    sensor2: '11°'
}

const interval = setTimeout(() => {
    db.get('tempo').push(today).write();
},15000)
clearInterval(interval);

db.get('tempo').push(today).write();

//****************************************************************

// Método Assincrono

/*const fileAsync = require('lowdb/adapters/FileAsync')
const adapter = new fileAsync(path.join('data', 'db.json'));


(async function() {
    const db = await low(adapter);
    let execucao = setTimeout(() => {
        db.defaults({relatorio: []}).write();
    }, 15000);
   
   // clearInterval(execucao);

    const dados = {
        date: '' ,
        sensor1: '',
        sensor2: ''
    }

    /*await db.get('relatorio')
        .remove()
        .write();

    await db.get('relatorio')
        .push({
            date: dados.date,
            sensor1: dados.sensor1,
            sensor2: dados.sensor2
        })
        .write();

    const time = await db.get('relatorio')
        .value();
})();*/