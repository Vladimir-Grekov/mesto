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
const addCardName = document.querySelector('.add-form__input_add_name');
const addCardLink = document.querySelector('.add-form__input_add_link');
const createForm = document.querySelector('.button_type_add');
const popupEdit = document.querySelector('.popup_type_edit');
const popupBpicture = document.querySelector('.popup_type_picture');
const popupPhoto = document.querySelector('.popup__container_type_photo');
const popupPhotoname = document.querySelector('.popup__container_type_text');
const popupOpened = document.querySelector('.popup_type_opened');

function resetForm() {
  const addForm = document.querySelector('.add-form');
  addForm.reset();
}

function openPopup(popup) {
  popup.classList.add('popup_type_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_type_opened');
};

function editInfo() {
  const removePopupEdit = document.querySelector('.button_type_close-edit');

  openPopup(popupEdit);

  editInfoName.value = infoName.textContent;
  editInfoJob.value = infoJob.textContent;

  function removeEditInfo() {
    closePopup(popupEdit);
  }
  
  removePopupEdit.addEventListener('click', removeEditInfo);

  return openPopup;
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
  elementName.textContent = el.name;
  elementPhoto.src = el.link;
  elementPhoto.alt = el.name;

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

function addCard() {
  const removePopupAdd = document.querySelector('.button_type_close-add');

  openPopup(popupAdd);

  function removeAddCard() {
    closePopup(popupAdd);
  }
  
  addCardName.addEventListener('click', resetForm)
  removePopupAdd.addEventListener('click', removeAddCard);
};

function createCard() {
  const itemElement = renderElement.cloneNode(true);
  const elementName = itemElement.querySelector('.element__mesto');
  const elementPhoto = itemElement.querySelector('.element__photo');
  const deleteButton = itemElement.querySelector('.button_type_delete');
  const likeButton = itemElement.querySelector('.button_type_like');

  elementName.textContent = addCardName.value;
  elementPhoto.src = addCardLink.value;
  elementPhoto.alt = addCardName.value;

  deleteButton.addEventListener('click', () => itemElement.remove());

  likeButton.addEventListener('click', () => {
    likeButton.classList.add('button_type_like-active');
    likeButton.classList.remove('button_type_like');
  })

  function openPicture() {
    popupBpicture.classList.add('popup_type_opened');

    popupPhoto.src = elementPhoto.src;
    popupPhoto.alt = elementName.textContent;
    popupPhotoname.textContent = elementName.textContent;
  };

  elementPhoto.addEventListener('click', openPicture);

  return itemElement;
}

createButton.addEventListener('click', () => {
  const newCard = createCard();
  elements.prepend(newCard);

  closePopup(popupAdd);
  
  return newCard;
});

edit.addEventListener('click', editInfo);
editForm.addEventListener('submit', handleFormSubmit);
createForm.addEventListener('click', addCard);