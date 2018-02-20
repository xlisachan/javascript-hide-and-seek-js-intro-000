function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('app').querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('div.grand-node div div div div')
}
