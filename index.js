function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('div').querySelector('nested target');
}

function deepestChild() {
  const deepestChild = document.getElementById('app').querySelectorAll('div grand-node')

  for (let i = 0; i < app.length; i++) {
    div[i].innerHTML = (i + 1).toString()
  }
}
