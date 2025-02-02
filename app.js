let amigos = [];


//Adicionando a lista de amigos a um array
function adicionarAmigo() {
    let limparNomeSorteado = document.getElementById("resultado");
    limparNomeSorteado.innerHTML = "";

    //Inserir nome e quarda no array amigos
    let entradaListaAmigos = document.querySelector("input").value;

    //Verifica se o Campo esta vazio
    if (entradaListaAmigos == "") {
        alert("Por favor, insira um nome.")
    } else {
        amigos.push(entradaListaAmigos);
    }

    //Inserir o array amigos onde tem o id listaAmigos para aparecer na tela
    percorrerArrayAmigos(amigos);

    //Limpa a caixa de texto após ser adicionada na lista de array
    limparCampoDeTexto();

}





function limparCampoDeTexto() {
    let limpaTexto = document.querySelector("input");
    limpaTexto.value = "";

    
}


//A função recebe o parametro amigos(amigos é um array)
function percorrerArrayAmigos(amigos) {

    let listaNomesAmigos = document.getElementById("listaAmigos"); // cria uma variavel pata pegar o elemento da listano html

    listaNomesAmigos.innerHTML = ""; //Zera o valor para ter certeza que não tem sujeira 

    //Faz um loopr para pegar todos elementos do array amigos e tem o amigos
    amigos.forEach(amigo => {
        let criarLi = document.createElement("li"); // cria o elemento li
        criarLi.textContent = amigo; //Define o texto dentro do elemento <li> com o nome do amigo.
        listaNomesAmigos.appendChild(criarLi); //Adiciona o novo elemento <li> como um filho da lista <ul>, exibindo-o na página.

    });

}



function sortearAmigo() {

    let nomeAmigoSecreto = document.getElementById("resultado");

    if (amigos.length === 0) {
        nomeAmigoSecreto.innerHTML = "Não há amigos na lista";
        return  ;
    }

    let indiceAmigoSorteado = Math.floor((Math.random() * amigos.length));
    let amigoSecreto = amigos[indiceAmigoSorteado];

    let limparNomesLista = document.getElementById("listaAmigos");
    limparNomesLista.innerHTML = "";
    amigos.length = 0;


    nomeAmigoSecreto.innerHTML = `Este é o seu amigo secreto: ${amigoSecreto}  `;

}


