
const caixaDoGrafico = document.querySelector(".caixaDoGrafico");

var graficoHtml = "";
var max_index = 0;
 

data.forEach(function(each_data, index){
    if(each_data.amount>data[max_index].amount)
    max_index= index
})







function calculando_altura(amount){
    return(amount*120)/data[max_index].amount
}






data.forEach(function(each_data, index){
    graficoHtml+='<div class="each-col-box">'
    graficoHtml+='<div class="column">'
    graficoHtml+='<span class="titulo">$'+each_data.amount+'</span>'

    graficoHtml+='<span class="col-bar '

    if( index==max_index)
    graficoHtml+="max"

    graficoHtml+='"style ="height:'+calculando_altura(each_data.amount)+'px"></span>'

    graficoHtml+='</div>'

    graficoHtml+='<span class= "day"> '+each_data.day+'</span>'

    graficoHtml+='</div>'
})



caixaDoGrafico.innerHTML= graficoHtml