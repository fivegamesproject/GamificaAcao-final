function acumularXP(faseXP) {
    xpAcumulado += faseXP;

    if (xpAcumulado >= xpMeta) {
        subirNivel();
        xpAcumulado = 0; 
    }

    salvarXPNoLocalStorage();
}

function subirNivel() {
    nivel++;
    xpMeta = calcularNovaMeta();
    salvarNivelNoLocalStorage();
    atualizarBarraXP();
}

function calcularNovaMeta() {
    return parseInt(xpMeta * 2);
  }
  
function atualizarBarraXP() {
    const xpProgresso  = document.querySelector('.actual-progress');
    const xpTexto  = document.querySelector('.progress-label');
    const xpMetaLabel  = document.querySelector('#xpMeta');


    const level  = document.querySelector('.level');


    const porcentagemXP = (xpAcumulado / xpMeta) * 100;
    xpProgresso.style.width = `${porcentagemXP}%`;

    xpMetaLabel.textContent = `${xpMeta} xp`;

    level.textContent = nivel;
    xpTexto.textContent = `${xpAcumulado}%`;
}

function salvarXPNoLocalStorage() {
    localStorage.setItem('xpAcumulado', xpAcumulado);
}

function salvarNivelNoLocalStorage(){
    localStorage.setItem('nivel', nivel);
}

function adicionarXPAcumulado() {
    atualizarBarraXP();
}

function carregarXPDoLocalStorage() {
    const xpArmazenado = localStorage.getItem('xpAcumulado');
    xpAcumulado = xpArmazenado ? parseInt(xpArmazenado, 10) : 0;
}
function definirXPInicial() {
    xpMeta = 5;
    xpMeta = calcularNovaMeta();
}

function inicializar() {
    carregarXPDoLocalStorage();
    atualizarBarraXP();
}



let xpAcumulado = 0;
let nivel = 1;
definirXPInicial();
inicializar();

