const presunto = document.querySelector('.presunto');

presunto.addEventListener('click', e=>{
    document.querySelector('.instavel-nav').classList.add('mostrar');
    document.querySelector('.coberto').style.display = 'block';
    document.querySelector('body').classList.add('.trancar')
})

document.querySelector('#fecha-Menu').addEventListener('click', e=>{
    document.querySelector('.instavel-nav').classList.add('mostrar');
    document.querySelector('.coberto').style.display = 'none';
    document.querySelector('body').classList.remove('trancar')
})