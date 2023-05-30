let popup = document.querySelector('.popup')
let editForm = document.querySelector('.edit-form')
let edit = document.querySelector('.profile__info_button_edit');
let infoName = document.querySelector('.profile__info-name');
let infoJob = document.querySelector('.profile__info-job');
let editInfoName = document.querySelector('.edit-form__input_edit_name');
let editInfoJob = document.querySelector('.edit-form__input_edit_job');
let remove = document.querySelector('.popup__container_button_close');

function editInfo() {
  popup.classList.add('popup_opened');
  editInfoName.value = infoName.textContent;
  editInfoJob.value = infoJob.textContent;
};

function removeEditInfo() {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = editInfoName.value;
  infoJob.textContent = editInfoJob.value;
  removeEditInfo();
};

edit.addEventListener('click', editInfo);
remove.addEventListener('click', removeEditInfo);
editForm.addEventListener('submit', handleFormSubmit);