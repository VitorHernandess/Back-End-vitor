let db = {
    celebrantes: [],
    participantes: [],
    celebracoes: []
};

function salvarDados(){
    localStorage.setItem('db', JSON.stringify(db));
}

function carregarDados(){
    const dados = localStorage.getItem('db');

    if (dados){
        db = JSON.parse(dados);
    }
}

function adicionarCelebrantes(){
    const nome = document.getElementById("celebrantes_nome").value;
    const nascimento = document.getElementById("celebrantes_nascimento").value;
    const id = db.celebrantes.length + 1;
    db.celebrantes.push({id, nome, nascimento});
    salvarDados();
    listarCelebrantes();
    listarAniversariantes();
}

function adicionarParticipantes(){
    const nome = document.getElementById("participantes_nome").value;
    const nascimento = document.getElementById("participantes_nascimento").value;
    const id = db.celebrantes.length + 1;
    db.celebrantes.push({id, nome, nascimento});
    salvarDados();
    listarCelebrantes();
    listarAniversariantes();
}

function adicionarCelebrantes(){
    const data = document.getElementById("celebracao_data").value;
    const horario = document.getElementById("celebracao_horario").value;
    const id_celebrante = document.getElementById("celebrcao_celebrantes").value;
    db.participantes.push({id, data, horario, id_celebrantes});
    salvarDados();
    listarCelebrantes();
}
function listarCelebrantes(){
    let lista = "";
    db.celebracoes.forEach(c => {const celebrante = db.celebrantes.find(x => x.id == c.id_celebrante)?.nome || 'Desconhecido'; lista += `<li>${c.data} - ${c.horario} - ${c.celebrante} <button onclick = 'excluirCelebracao(${c.id})'>Excluir</button><li>`;});
    document.getElementById("lista_celebracoes").innerHTML = lista;
}