let amigosAdicionados = [];

function adicionar() {
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    
    amigosAdicionados.push(nomeDoAmigo);
    listaAmigos.textContent = amigosAdicionados;
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
    let amigosSorteados = embaralharAmigos(amigosAdicionados.slice());

    let sorteouOProprioNome = amigosAdicionados.some(
        (amigo, index) => amigo === amigosSorteados[index]
    );
    
    if (sorteouOProprioNome) {
        sortear();
    }
    
    listaSorteio.innerHTML = '';
    for (let i = 0; i < amigosSorteados.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = `${amigosAdicionados[i]} --> ${amigosSorteados[i]}`
        listaSorteio.appendChild(paragrafo);
    }
}

function embaralharAmigos(amigos) {
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
    return amigos;
}

function reiniciar() {
    amigosAdicionados = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}