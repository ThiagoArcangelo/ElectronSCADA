const conexao = document.getElementById('footer');
const desconexao = document.getElementById('footer');

const valor1 = document.getElementById('receivedFirst');
const valor2 = document.getElementById('receivedSecond');

let form = document.querySelector('form');
  
function conectar(){
  const socket = io.connect('http://localhost:3000');

  socket.on('connected', () => {
    console.log('Conectado');  
    setTimeout(conexao.innerHTML = 'Conectado', 5000);
    clearInterval();
  });


  socket.on('disconnect', () => {
    console.log('Desconectado') 
    setTimeout(conexao.innerHTML = 'Desconectado', 5000);
    clearInterval();
  });

  socket.on('data', data => {  
    
    if(data.length <= 10){
      valor1.style.fontSize = '8vw';
      valor2.style.fontSize = '8vw';
    } else if (data.length > 10){
      valor1.style.fontSize = '2vw';
      valor2.style.fontSize = '2vw';
    }

    const leitura = data.split(':'); 

    valor1.innerHTML = [`${leitura[0]}°`];
    valor2.innerHTML = [`${leitura[1]}°`]; 

       
  });
}

