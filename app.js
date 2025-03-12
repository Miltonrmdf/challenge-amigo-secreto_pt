document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById("listaAmigos");
    const inputNome = document.getElementById("amigo");
    const botaoAdicionar = document.querySelector(".button-add");
    const botaoSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");
    
    let amigos = [];

    botaoAdicionar.addEventListener("click", function() {
        adicionarAmigo();
    });

    botaoSortear.addEventListener("click", function() {
        sortearAmigo();
    });

    function adicionarAmigo() {
        const nome = inputNome.value.trim();
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        amigos.push(nome);
        atualizarListaAmigos();
        inputNome.value = "";
    }

    function atualizarListaAmigos() {
        lista.innerHTML = "";
        amigos.forEach(amigo => {
            const item = document.createElement("li");
            item.textContent = amigo;
            lista.appendChild(item);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("A lista está vazia! Adicione amigos antes de sortear.");
            return;
        }
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong></li>`;
    }
});

/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function textoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML;
}

textoNaTela('p',)


function cadastroNome (){
    let nome = document.querySelector('input').value;
    if(value=''){
        prompt('Favor preencher o campo')
    }
}*/

