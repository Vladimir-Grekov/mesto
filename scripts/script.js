const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector('.popup');
const editForm = document.querySelector('.edit-form');
const edit = document.querySelector('.button_type_edit');
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');
const editInfoName = document.querySelector('.edit-form__input_edit_name');
const editInfoJob = document.querySelector('.edit-form__input_edit_job');
const elements = document.querySelector('.elements');
const element = document.querySelector('.template-element').content;
const renderElement = element.querySelector('.element');
const createButton = document.querySelector('.button_type_create');
const popupAdd = document.querySelector('.popup_type_add');
const addCardInput = document.querySelector('.add-form__input');
const addCardName = document.querySelector('.add-form__input_add_name');
const addCardLink = document.querySelector('.add-form__input_add_link');
const createForm = document.querySelector('.button_type_add');
const popupEdit = document.querySelector('.popup_type_edit');
const popupBpicture = document.querySelector('.popup_type_picture');
const popupPhoto = document.querySelector('.popup__photo');
const popupPhotoname = document.querySelector('.popup__text');
const popupOpened = document.querySelector('.popup_type_opened');
const addForm = popupAdd.querySelector('.add-form');
const removePopupEdit = document.querySelector('.button_type_close-edit');
const removePopupAdd = document.querySelector('.button_type_close-add');
const removePopupPicture = document.querySelector('.button_type_close-picture');


function openPopup(popup) {
  popup.classList.add('popup_type_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
};

function editInfo() {
  openPopup(popupEdit);

  editInfoName.value = infoName.textContent;
  editInfoJob.value = infoJob.textContent;
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  infoName.textContent = editInfoName.value;
  infoJob.textContent = editInfoJob.value;

  closePopup(popupEdit);
};

function createElement(el) {
  const itemElement = renderElement.cloneNode(true);
  const elementName = itemElement.querySelector('.element__mesto');
  const elementPhoto = itemElement.querySelector('.element__photo');
  const deleteButton = itemElement.querySelector('.button_type_delete');
  const likeButton = itemElement.querySelector('.button_type_like');
  itemElement.querySelector('.element__photo').src = el.link;
  itemElement.querySelector('.element__mesto').textContent = el.name;

  deleteButton.addEventListener('click', () => itemElement.remove());
  likeButton.addEventListener('click', () => {
    likeButton.classList.add('button_type_like-active');
    likeButton.classList.remove('button_type_like');
  })

  function openPicture() {
    let removePopupPicture = document.querySelector('.button_type_close-picture');

    openPopup(popupBpicture);

    function removeOpenPicture() {
      closePopup(popupBpicture);
    }

    popupPhoto.src = elementPhoto.src;
    popupPhoto.alt = elementName.textContent;
    popupPhotoname.textContent = elementName.textContent;

    removePopupPicture.addEventListener('click', removeOpenPicture);
  };

  elementPhoto.addEventListener('click', openPicture);

  return itemElement;
}

initialCards.forEach((item) => {
  const newElement = createElement(item);
  elements.prepend(newElement);
});

function createCard(link, name) {
  const elementCard = renderElement.cloneNode(true);
  const likeButton = elementCard.querySelector('.button_type_like');
  const deleteButton = elementCard.querySelector('.button_type_delete')
  elementCard.querySelector('.element__photo').src = link;
  elementCard.querySelector('.element__mesto').textContent = name;
  likeButton.addEventListener('click', () => {
    likeButton.classList.add('button_type_like-active');
    likeButton.classList.remove('button_type_like');
  })

  deleteButton.addEventListener('click', () => elementCard.remove());
  
  function openPicture() {

    openPopup(popupBpicture);

    popupPhoto.src = elementCard.querySelector('.element__photo').src;
    popupPhoto.alt = elementCard.querySelector('.element__mesto').textContent;
    popupPhotoname.textContent = elementCard.querySelector('.element__mesto').textContent;

    removePopupPicture.addEventListener('click', removeOpenPicture);
  };

  elementCard.querySelector('.element__photo').addEventListener('click', openPicture);

  return elementCard;
}

addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = createCard(addCardLink.value, addCardName.value);
  elements.prepend(newCard);

  closePopup(popupAdd);

  return newCard;
});

removePopupEdit.addEventListener('click', () => {
  closePopup(popupEdit)
});
removePopupAdd.addEventListener('click', () => {
  closePopup(popupAdd)
});
removePopupPicture.addEventListener('click', () => {
  closePopup(popupBpicture);
})
edit.addEventListener('click', editInfo);
editForm.addEventListener('submit', handleFormSubmit);
createForm.addEventListener('click', () => {
  addForm.reset();

  openPopup(popupAdd);
});