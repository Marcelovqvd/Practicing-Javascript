function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('mouseout', (e) => {
      console.log(e);
      if (e.target == modalID || e.target.className == 'fechar') {
        modal.classList.remove('mostrar');
        localStorage.fechaModal = modalID; //Se, não abre mais o modal p o usario
      }
    });
  }
}

const saida = document.querySelector('html');

saida.addEventListener('mouseout', () => iniciaModal('modal-principal'));

/*mouseout ou mouseleave
Basicamente, unica diferença entre os dois é que, o mouseleave é disparado também nos elementos filhos do elemento selecionado, e o mouseout dispara apenas no elemento selecionado.*/
