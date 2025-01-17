// Common
function checkElement(element, index = 0) {
  return document.querySelectorAll(element)[index] !== undefined;
}

function clickElement(element, index = 0) {
  document.querySelectorAll(element)[index].click();
}

// Text
function checkElementText(element, param, index = 0) {
  return document.querySelectorAll(element)[index].innerText === param;
}

function checkElementTextIncludes(element, param, index = 0) {
  return document.querySelectorAll(element)[index].innerText.includes(param);
}

function getElementText(element, index = 0) {
  return document.querySelectorAll(element)[index].innerText;
}

// Length
function checkElementLengthEqualTo(element, param) {
  return document.querySelectorAll(element).length === param;
}

function checkElementLengthDifferentTo(element, param) {
  return document.querySelectorAll(element).length !== param;
}

// use this for other operations
function getElementLength(element) {
  return document.querySelectorAll(element).length;
}

exports.checkElement = checkElement;
exports.clickElement = clickElement;
exports.checkElementText = checkElementText;
exports.checkElementTextIncludes = checkElementTextIncludes;
exports.getElementText = getElementText;
exports.checkElementLengthEqualTo = checkElementLengthEqualTo;
exports.checkElementLengthDifferentTo = checkElementLengthDifferentTo;
exports.getElementLength = getElementLength;