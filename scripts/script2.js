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

let elements = document.querySelector('.elements');
let element = document.querySelector('.template-element').content;
let renderElement = element.querySelector('.element');
let createButton = document.querySelector('.button_type_create');
let popupAdd = document.querySelector('.popup-add');
let addForm = document.querySelector('.add-form');
let addCardName = document.querySelector('.add-form__input_add_name');
let addCardLink = document.querySelector('.add-form__input_add_link');
let createForm = document.querySelector('.button_type_add');
let popupBpicture = document.querySelector('.popup-bp');
let popupPhoto = document.querySelector('.popup-bp__photo');
let popupbPictureclose = document.querySelector('.button_type_closepopupbp');
let popupAddclose = document.querySelector('.button_type_closepopupadd');
let popupPhotoname = document.querySelector('.popup-bp__name');

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
    popupBpicture.classList.add('popup-bp_opened');

    popupPhoto.src = elementPhoto.src;
    popupPhoto.alt = elementName.textContent;
    popupPhotoname.textContent = elementName.textContent;
  };

  function closePicture() {
    popupBpicture.classList.remove('popup-bp_opened');
  }

  elementPhoto.addEventListener('click', openPicture);
  popupbPictureclose.addEventListener('click', closePicture);

  return itemElement;
}

initialCards.forEach((item) => {
  const newElement = createElement(item);
  elements.prepend(newElement);
});

function addCard() {
  popupAdd.classList.add('popup-add_opened');
  addCardName.value = 'Название';
  addCardLink.value = 'Ссылка на картинку';

  addCardName.addEventListener('click', () => {
    addCardName.value = '';
  })

  addCardLink.addEventListener('click', () => {
    addCardLink.value = '';
  })
};

function closeaddCard() {
  popupAdd.classList.remove('popup-add_opened');
}

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
    popupBpicture.classList.add('popup-bp_opened');

    popupPhoto.src = elementPhoto.src;
    popupPhoto.alt = elementName.textContent;
    popupPhotoname.textContent = elementName.textContent;
  };

  function closePicture() {
    popupBpicture.classList.remove('popup-bp_opened');
  }

  elementPhoto.addEventListener('click', openPicture);
  popupbPictureclose.addEventListener('click', closePicture);

  return itemElement;
}

createForm.addEventListener('click', addCard);
popupAddclose.addEventListener('click', closeaddCard);
createButton.addEventListener('click', () => {
  const newCard = createCard();
  elements.prepend(newCard);
});

