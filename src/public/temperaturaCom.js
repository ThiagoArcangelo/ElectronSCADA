async function getContent(){
    const response = await fetch('http://localhost:3000/temperatura');

    const data = await response.json();

    let show = document.getElementById('dados_recebidos');
    show.innerHTML = show;
}

getContent();