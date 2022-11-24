
const selecionar = (item) => {
    itens = document.querySelectorAll('.optionItemSelect')

    itens.forEach(e => {
        e.classList.remove('select')
    });

    item.classList.add('select')
}

const resetar = () => {
    document.querySelector('#numberValue').value = ""
    document.querySelector('#numberValue').focus()
}

document.body.addEventListener('keydown', e => {
    if(e.keyCode == 13){
        converter()
    }
})

