let amigosAdicionados = [];

function adicionar() {
    let nomeDoAmigo = document.getElementById('nome-amigo').value.trim();
    
    if (nomeDoAmigo === "" || amigosAdicionados.includes(nomeDoAmigo)) {
        alert("Informe o nome do amigo!");
        return;
    }

    amigosAdicionados.push(nomeDoAmigo);
    atualizarLista();
    document.getElementById('nome-amigo').value = '';
}

function atualizarLista() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';

    amigosAdicionados.forEach((amigo, index) => {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigo;
        paragrafo.style.cursor = "pointer";

        paragrafo.addEventListener('click', () => {
            amigosAdicionados.splice(index, 1);
            atualizarLista();
        });
    
        listaAmigos.appendChild(paragrafo);
    });
}

function sortear() {
    if (amigosAdicionados.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let listaSorteio = document.getElementById('lista-sorteio');
    let amigosSorteados;

    do {
        amigosSorteados = embaralharAmigos([...amigosAdicionados]);
    } while (amigosAdicionados.some((amigo, index) => amigo === amigosSorteados[index]));

    listaSorteio.innerHTML = '';
    for (let i = 0; i < amigosAdicionados.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = `${amigosAdicionados[i]} --> ${amigosSorteados[i]}`;
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
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
