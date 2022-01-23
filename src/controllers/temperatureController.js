const Temp = require('../models/temperatura');

exports.get = async (req, res) => {    

    const resposta = await Temp.findAll()
        .then(function(temperaturas){
            res.render('pages/temperatura', {temperatura: temperaturas});
        })        
        .catch ((error) => {
            console.log('Falha ao processar sua requisição. ' + error);
        }) 
        
}

exports.post = async (req, res) => {
    try {
        const temp = await Temp.create({
            valor1: req.body.valor1,
            valor2: req.body.valor2
        } );
        await temp.save();
        console.log("Dados cadastrados com sucesso");
    } catch (error) {
        console.log("Dados não cadastrados" + error);

    } 
}



