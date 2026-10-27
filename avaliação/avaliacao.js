let nivelSelecionado = null;
let notaNumerica = 0;
let tagSelecionada = null;

const dicionarioMotivos = {
    'NAO_GOSTEI': ['Atrasou a sessão', 'Exercício muito difícil', 'Comunicação ruim'],
    'NEUTRO': ['Atendimento normal', 'Exercício cansativo', 'Sem observações'],
    'GOSTEI': ['Muito atencioso', 'Explica bem', 'Pontual'],
    'OTIMO': ['Excelente profissional', 'Muito paciente', 'Pontual', 'Recomendo']
};

function selecionarNivel(classificacao, nota, elemento) {
    nivelSelecionado = classificacao;
    notaNumerica = nota;
    tagSelecionada = null;

    document.querySelectorAll('.btn-nivel').forEach(b => b.classList.remove('selected'));
    elemento.classList.add('selected');

    // Carregar Tags Dinâmicas
    const containerTags = document.getElementById('lista-tags-dinamicas');
    containerTags.innerHTML = '';
    
    dicionarioMotivos[classificacao].forEach(texto => {
        const btnTag = document.createElement('button');
        btnTag.className = 'btn-tag-item';
        btnTag.innerText = texto;
        btnTag.onclick = () => {
            document.querySelectorAll('.btn-tag-item').forEach(t => t.classList.remove('active'));
            btnTag.classList.add('active');
            tagSelecionada = texto;
        };
        containerTags.appendChild(btnTag);
    });

    document.getElementById('box-motivos-rapidos').classList.remove('hidden');
    document.getElementById('btn-confirmar-avaliacao').disabled = false;
}

function ouvirPerguntaAba() {
    const texto = document.getElementById('texto-pergunta').innerText;
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-PT';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}

function submeterAvaliacaoAba() {
    if (!nivelSelecionado) return;

    alert(`Avaliação enviada com sucesso!\nNível: ${nivelSelecionado}\nTag: ${tagSelecionada || 'Nenhuma'}`);
    fecharAbaAvaliacao();
}

function fecharAbaAvaliacao() {
    document.getElementById('aba-avaliacao-pos-compra').style.display = 'none';
}