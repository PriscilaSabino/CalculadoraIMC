let calcular = document.getElementById('calcular')

function imc (){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let res = document.getElementById('res')

    if(nome !== '' && altura !=='' && peso !== ''){
let valorIMC = (peso / (altura * altura)).toFixed(1)//arredonda numero pra cima
let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorIMC <25){
            classificacao = 'peso ideal, parabéns!'
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso.'
        }else if(valorIMC <35){
            classificacao = 'com obesidade grau 1.'

        }else if(valorIMC<40){
            classificacao = 'com obesidade grau II.'
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!'
        }
        res.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`
    }else{
        res.textContent = 'Preencha todos os campos!'
    }
}
calcular.addEventListener('click', imc)
calcular()