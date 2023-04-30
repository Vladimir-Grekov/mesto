let popup = document.querySelector('.popup')
let edit = document.querySelector('.button__edit');
let InfoName = document.querySelector('.profile__info_name');
let InfoJob = document.querySelector('.profile__info_job');
let EditInfoName = document.querySelector('.edit_form__name');
let EditInfoJob = document.querySelector('.edit_form__job');
let remove = document.querySelector('.popup__button_close');
let like = document.querySelector('.elements__element_button')

function editInfo() {
  popup.classList.add('popup__opened');
  EditInfoName.value = InfoName.textContent;
  EditInfoJob.value = InfoJob.textContent;
};

function RemoveEditInfo() {
  popup.classList.remove('popup__opened');
  renderAdded()
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  InfoName.textContent = EditInfoName.value;
  InfoJob.textContent = EditInfoJob.value;
  RemoveEditInfo();
};

edit.addEventListener('click', editInfo);
remove.addEventListener('click', RemoveEditInfo); 
popup.addEventListener('submit', handleFormSubmit);
like.addEventListener('click', changeImageLike)