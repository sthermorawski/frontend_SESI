function executarSistema(){

    //dados entrada
    const nome = document.getElementById("InputNome").value;
    const idade = parseInt(document.getElementById("InputIdade").value);
    const valor = parseFloat(document.getElementById("InputValor").value);
    const cupom = document.getElementById("InputCupom").value === "true";

    //dados saida
    const msg = document.getElementById("mensagem-autorização");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    //validacao para campos vazios
    if(!nome || isNaN(idade) || isNaN(valor)){
        alert("por favor preencha todos os campos.");
        return;
    }
    //regra de negocio
    if(idade >= 16) {
        msg.innerText = `venda autorizada: ${nome}`;
        msg.style.color = "#00ff88";

        // desconto 
        let valorFinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

        //estoque
        let estoque = ["placa de video", "processador", "memoria RAM"];
        lista.innerHTML = ""; //limpa a lista anterior
    }
}

