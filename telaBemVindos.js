let area = document.getElementById('area');
let botao = document.getElementById("botao");
nomeCadastro = ["Antonio César", "Fulano2", "Fulano3", "Fulano4"];

function entrar() {
    let nome = prompt("Digite o seu nome");
    //let encontrou = false;
    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        encontrou = nomeCadastro.find(element => element === nome);
        console.log(encontrou);

        const foundItem = nomeCadastro.find(element => element === nome);
        if (foundItem) {
            console.log("Item encontrado:", foundItem);
        } else {
            console.log("Item não encontrado no array.");
        }
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