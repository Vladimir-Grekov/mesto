let popup = document.querySelector('.popup')
let edit = document.querySelector('.button__edit');
let InfoName = document.querySelector('.profile__info-name');
let InfoJob = document.querySelector('.profile__info-job');
let EditInfoName = document.querySelector('.edit-form__name');
let EditInfoJob = document.querySelector('.edit-form__job');
let remove = document.querySelector('.button__close');
let like = document.querySelector('.button__like-icon');

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

function changeImageLike() {
if  (like.src = './images/Like.svg'){
like.src = './images/Union.svg';}
else
{if  (like.src = './images/Union.svg'){
like.src = './images/Like.svg';}};
renderAdded()
};

edit.addEventListener('click', editInfo);
remove.addEventListener('click', RemoveEditInfo); 
popup.addEventListener('submit', handleFormSubmit);
like.addEventListener('click', changeImageLike);