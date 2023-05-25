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
        const foundItem = nomeCadastro.find(element => element === nome);
        if (foundItem) {
            document.write("Item encontrado:", foundItem);
        } else {
            document.write("Item não encontrado, favor cadastrar");
        }
        
    }
    

}//final da função entrar

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden");
}