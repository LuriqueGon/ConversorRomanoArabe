const valoresArabicos = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
]
const simbolosArabicos = [
    'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
]
const valoresRomanos = [
    900, 400, 90, 40, 9, 4, 1000, 500, 100, 50, 10, 5, 1
]
const simbolosRomanos = [
    "CM", "CD", "XC", "XL", "IX", "IV", "M", "D", "C", "L", "X", "V", "I"
]


const arabicoToRomano = arabico => {
    arabico = Number(arabico)
    let romano = ""

    for(let i = 0; i<valoresArabicos.length; i++){

        while(arabico >= valoresArabicos[i]){
            romano += simbolosArabicos[i] + ' '
            arabico -= valoresArabicos[i]
        }
    
    }
    
    document.querySelector('span.res').textContent = romano.substring(0, romano.length - 1)
    return romano
}

const romanoToArabico = romano => {
    let arabico = 0
    romano = romano.toUpperCase()

    for(let i = 0; i<simbolosRomanos.length; i++){

        while( romano.indexOf(simbolosRomanos[i]) != -1){
            
            romano = romano.replace(simbolosRomanos[i], "")
            arabico += valoresRomanos[i]
            
        }
        
    }

    if(romano != ""){
        alert("A(S) letra (S) " +romano + " Foi/Foram desconsiderada(s)")
    }

    document.querySelector('span.res').textContent = arabico
    return arabico
    
}

const converter = () => {

    let number = document.querySelector('#numberValue').value
    if(document.querySelector('.select')){

        if(document.querySelector('.select').textContent == 'Arabico'){

            if(number > 0 && number<4000){
                arabicoToRomano(number)
            }else{
                alert('Insira um numero entre 1 - 3999')
            }

        }else if(document.querySelector('.select').textContent == 'Romano'){
            let value = document.querySelector('#numberValue').value
            if(!Number(value)){
                romanoToArabico(value)
            }else{
                alert('Insira numeros Romanos Validos (I, V, X, L, C, D, M) ')
            }
        }
        resetar()

    }else{
        alert('Selecione o tipo do numero')
    }
}


