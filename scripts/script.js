let removePopup = document.querySelector('.button_type_closepopup');
let cards = document.querySelector('.elements');
let popup = document.querySelector('.popup');
let editForm = document.querySelector('.edit-form');
let edit = document.querySelector('.button_type_edit');
let infoName = document.querySelector('.profile__info-name');
let infoJob = document.querySelector('.profile__info-job');
let editInfoName = document.querySelector('.edit-form__input_edit_name');
let editInfoJob = document.querySelector('.edit-form__input_edit_job'); 

function editInfo() {
  popup.classList.add('popup_opened');
  editInfoName.value = infoName.textContent;
  editInfoJob.value = infoJob.textContent;
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = editInfoName.value;
  infoJob.textContent = editInfoJob.value;
  removeEditInfo();
};

function removeEditInfo() {
  popup.classList.remove('popup_opened');
};

edit.addEventListener('click', editInfo);
removePopup.addEventListener('click', removeEditInfo);
editForm.addEventListener('submit', handleFormSubmit);
