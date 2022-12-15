


function clickMenu(){
    if(superior.style.display == 'block') {
        superior.style.display = 'none'
    } else {
        superior.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        superior.style.display = 'block'
    } else {
        superior.style.display = 'none'
    }
}


let quantidade = document.querySelector ('qtd')
let add = document.querySelector ('.addCar')
add.addEventListener ('click', 'cart');

function cart() {
    quantidade ++
    document.getElementById ('qtd').innerText=quantidade
}

let rmv = document.querySelector ('.remove')
rmv.addEventListener ('click', 'remove')

function remove (){
    quantidade --
    if (quantidade == 00) 
        {}
        document.getElementById ('qtd').innerText=quantidade
    
    }
