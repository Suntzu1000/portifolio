const enviar = document.querySelector('.enviar');
const conteudo01 = document.querySelector('.conteudo01');
const conteudo02 = document.querySelector('.conteudo02');
const classificacao = document.querySelectorAll('.classificacao');
const pontuacao = document.querySelector('.pontuacao');
let estrelaPontuacao = 3


enviar.addEventListener('click', onEnviar);
classificacao.forEach(classificacao =>{
    classificacao.addEventListener('click', lidarcomclick);
})

function onEnviar(){
    conteudo01.classList.add('oculto');
    pontuacao.textContent = estrelaPontuacao;
    conteudo02.classList.remove('oculto');
    //console.log('enviar click')
}

function lidarcomclick(event){
    classificacao.forEach(classificacao => {
        classificacao.classList.remove('ativo')
    });
    
   // console.log('click classificacao')

   if(event.target.classList.contains('classificacao')){
    event.target.classList.add('ativo');
   } else{
    event.target.parentElement.classList.add('ativo');
   }
   estrelaPontuacao = event.target.textContent;
   console.log(estrelaPontuacao);


}

//console.log(classificacao);