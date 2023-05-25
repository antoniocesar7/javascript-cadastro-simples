let area = document.getElementById('area');
let botao = document.getElementById("botao");
let nomeCadastro = [];
let encontrou = false;

function telaCadastrar(){
 for(i=0;i<5;i++){
    //criando os labels
    nomeLabel = document.createElement("label");
    nomeLabel.innerHTML = "Nome: ";
    area.appendChild(nomeLabel);

    //criando as caixas de input
    nomeInput = document.createElement("input");
    nomeInput.setAttribute("type","text");
    nomeInput.setAttribute("id","nome"+[i]);
    area.appendChild(nomeInput);

    //criando br para pular linha
    pulaLinhaBr = document.createElement("br");
    area.appendChild(pulaLinhaBr)

 }
    buttonEnviar = document.createElement("button");
    buttonEnviar.innerText = "Enviar";
    area.appendChild(buttonEnviar);
    buttonEnviar.onclick = cadastrar;

    botao.setAttribute("disabled", "true"); // Desabilita o botão "Cadastrar"
}

function cadastrar(){

    for (i=0;i<5;i++){
        nomeCadastro[i] = document.getElementById("nome"+i).value;
    }
    //console.log(nomeCadastro);
    removerElementosCadastro();
}

function removerElementosCadastro() {
    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }

    botao.removeAttribute("disabled"); // Habilita novamente o botão "Cadastrar"
}

// O método firstChild é uma propriedade de um elemento HTML que retorna o primeiro nó filho desse elemento. Um nó filho pode ser um elemento HTML, um texto, um comentário, etc.
// No contexto do exemplo anterior, a propriedade firstChild é usada no loop while da função removerElementosCadastro() para obter o primeiro nó filho do elemento area e removê-lo. O loop continua removendo o primeiro nó filho repetidamente até que não haja mais nós filhos restantes, ou seja, até que o elemento area esteja vazio.
// Desta forma, o uso de area.removeChild(area.firstChild) no loop permite remover todos os elementos filhos um por um até que não haja mais nenhum, limpando o conteúdo anteriormente adicionado pela função telaCadastrar().

function entrar() {
    let nome = prompt("Digite o seu nome");
    //let encontrou = false;
    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i < 4; i++) {
            if (nomeCadastro[i] == nome) {
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
            }
        }

    }
    if (encontrou == false) {
        alert("Nome não cadatrado, favor realizar cadastro!")
    }

}//final da função entrar

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden");
}