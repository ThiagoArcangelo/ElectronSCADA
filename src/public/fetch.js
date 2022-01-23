const dados1 = document.getElementById('receivedFirst');
const dados2 = document.getElementById('receivedSecond');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

/*function modificarDados(){
    input1.value = dados1.innerText;
    input2.value = dados2.innerText; 
}*/  

window.onload = function modificarDados(){
    
    input1.value = dados1.innerText;
    input2.value = dados2.innerText; 
    
    setTimeout(function(){
  		//document.getElementById('form').submit();

        
        const myForm = document.getElementById('form');

        function enviarDados(){
            myForm.addEventListener('submit', function(e){
                e.preventDefault();
            })
            
            const formData = new FormData(document.getElementById('form'));

            fetch('http://localhost:3000', {
                    method: 'post',
                    body: /*formData*/ JSON.stringify({valor1: input1 , valor2: input2
                    }).then(function(response){
                        return response.text();
                    }).then(function(text){
                        console.log(text);
                    }).catch(function(error){
                        console.log(error);
                    })
                
    }, 10000);           
}    



