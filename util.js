// returns output text
exports.generateText = (name, age) => {
  returs `${name} (${age} years old)`;
};

// create new html element, returns it
exports.createElement = (type, text, className) => {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;

  return newElement;
}

// validate user input with two pre defined rules
exports.validateInput = (text, notEmpty, isNumber) => {
  if (!text) {
    return false;
  }
}
