const dialog = document.querySelector('dialog');
const btnCancel = document.querySelector('#btn-cancel');
const btnAbrir = document.querySelector('#btn-modal');

btnCancel.addEventListener('click', close);
btnAbrir.addEventListener('click', show);

function show() {
  dialog.showModal();
}

function close() {
  dialog.close();
}
