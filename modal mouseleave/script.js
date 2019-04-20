
function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  if (localStorage.fechaModal !== modalID) {
    if (modal) {
      modal.classList.add('mostrar');
      modal.addEventListener('click', (e) => {
        if (e.target == modalID || e.target.className == 'fechar' || e.target.className == 'button') {
          modal.classList.remove('mostrar');
          localStorage.fechaModal = modalID;
        }
      });
    }
  }
}

const saida = document.querySelector('html');

saida.addEventListener('mouseleave', () => iniciaModal('modal-principal'));

/*mouseout ou mouseleave
Basicamente, unica diferença entre os dois é que, o mouseleave é disparado também nos elementos filhos do elemento selecionado, e o mouseout dispara apenas no elemento selecionado.*/
