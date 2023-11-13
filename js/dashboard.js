function mostrarInformacoesAdicionais() {
   
    var informacoesAdicionais = document.querySelector('.informacoes-adicionais');

  
    if (informacoesAdicionais.style.display === 'none') {
        informacoesAdicionais.style.display = 'block';
    } else {
        informacoesAdicionais.style.display = 'none';
    }
}

function mostrarInformacoesAdicionaisEmpresa() {
  
    var informacoesAdicionaisEmpresa = document.querySelector('.informacoes-adicionais-empresa');

   
    if (informacoesAdicionaisEmpresa.style.display === 'none') {
        informacoesAdicionaisEmpresa.style.display = 'block';
    } else {
        informacoesAdicionaisEmpresa.style.display = 'none';
    }
}


