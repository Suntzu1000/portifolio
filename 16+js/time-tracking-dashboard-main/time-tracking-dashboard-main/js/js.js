let prazo = 'weekly';
const container = document.querySelector('.container');
let regularCartas;

const menu = document.querySelectorAll('.menu-link');

menu.forEach(element => {
    element.addEventListener('click', menuNoClick);
});



let data = {};

fetch('js/data.json')
    .then(resp => resp.json())
    .then(jsonData => {

       jsonData.forEach(element => {
          container.insertAdjacentHTML('beforeend',     
            createRegularCarta(element, prazo));        
       });
       jsonData.forEach(element => {
        data[element.title] = element.timeframes;
       });

       regularCartas = document.querySelectorAll('.regular-cartao');
      /* console.log(regularCartas)*/

    });

function menuNoClick(event){
    //console.log('click', event.target.innerText.toLowerCase());
    menu.forEach(element => {
        element.classList.remove('menu-ativo');
    });
    event.target.classList.add('menu-ativo');
    prazo = event.target.innerText.toLowerCase();

    atualizarCartas(prazo);
}

function atualizarCartas(prazo){
  regularCartas.forEach(carta => {
    atualizarCarta(carta, prazo);
  })
}

function atualizarCarta(carta, prazo) {
  const titulo = carta.querySelector('.titulo').innerText;
  const corrente = data[titulo][prazo]['current'];
  const anterior = data[titulo][prazo]['previous'];

  const prazoMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  };

  const horasElement = carta.querySelector('.horas');
  horasElement.innerText = `${corrente}hrs`;
  const msgElement =  carta.querySelector('.descricao');
  msgElement.innerText = `${prazoMsg[prazo]} - ${anterior}hrs`
  
}

function createRegularCarta(element, prazo){
    let titulo = element['title'];
    let corrente = element['timeframes'][prazo]['current'];
    let anterior = element['timeframes'][prazo]['previous'];

    const prazoMsg = {
      'daily': 'Yesterday',
      'weekly': 'Last Week',
      'monthly': 'Last Month'
    };

    

    return `
<div class="regular-cartao ${titulo.toLowerCase().replace(/\s/g, '')}">
    <div class="propriedade-cartao">
      <div class="seta">
        <div class="titulo">${titulo}</div>
        <div class="pontos">
          <div class="ponto"></div>
          <div class="ponto"></div>
          <div class="ponto"></div>
        </div>
      </div>
      <div class="seta02">
       <div class="horas">${corrente} hrs</div>
       <div class="descricao"> ${prazoMsg[prazo]} - ${anterior} hrs </div>
      </div>
    </div>
</div>`
}
