function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('app').querySelector('#nested .target');
}

function deepestChild() {
  const dC = document.getElementById('app').querySelectorAll('div.grand-node div')

  for (let i = 0; i < dC.length; i++) {
    divs[i].innerHTML = (i + 1).toString()
  }
}