const { generateText, createElement, validateInput } =
  require('./util');

// initialize app, register button click listener
const initApp = () => {
  const newUserButton =
    document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
}

// fetch user input, create html element, appends it to dom
const addUser = () => {
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  if (
    !validateInput(newUserNameInput.value, true, false) ||
    !validateInput(newUserAgeInput.value, false, true)
  ) {
    return;
  }
  
  const userList = document.querySelector('.user-list');
  const outputText = generateText(
    newUserNameInput.value,
    newUserAgeInput.value
  );
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

initApp();
