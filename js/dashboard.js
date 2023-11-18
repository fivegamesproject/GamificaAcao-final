// function mostrarInformacoesAdicionais() {
   
//     var informacoesAdicionais = document.querySelector('.informacoes-adicionais');

  
//     if (informacoesAdicionais.style.display === 'none') {
//         informacoesAdicionais.style.display = 'block';
//     } else {
//         informacoesAdicionais.style.display = 'none';
//     }
// }

// function mostrarInformacoesAdicionaisEmpresa() {
  
//     var informacoesAdicionaisEmpresa = document.querySelector('.informacoes-adicionais-empresa');

   
//     if (informacoesAdicionaisEmpresa.style.display === 'none') {
//         informacoesAdicionaisEmpresa.style.display = 'block';
//     } else {
//         informacoesAdicionaisEmpresa.style.display = 'none';
//     }
// }



function mostrarInformacoesAdicionais() {
    var informacoesAdicionais = document.querySelector('.informacoes-adicionais');
    var informacoesAdicionaisEmpresa = document.querySelector('.informacoes-adicionais-empresa');

    if (informacoesAdicionais.style.display === 'block') {
        informacoesAdicionais.style.display = 'none';
    } else {
        informacoesAdicionais.style.display = 'block';
        informacoesAdicionaisEmpresa.style.display = 'none';
    }
}

function mostrarInformacoesAdicionaisEmpresa() {
    var informacoesAdicionais = document.querySelector('.informacoes-adicionais');
    var informacoesAdicionaisEmpresa = document.querySelector('.informacoes-adicionais-empresa');

    if (informacoesAdicionaisEmpresa.style.display === 'block') {
        informacoesAdicionaisEmpresa.style.display = 'none';
    } else {
        informacoesAdicionaisEmpresa.style.display = 'block';
        informacoesAdicionais.style.display = 'none';
    }
}