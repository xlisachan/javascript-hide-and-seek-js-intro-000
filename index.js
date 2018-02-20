function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const nodeElement = document.querySelector('#grand-node');
  const childElement = nodeElement.children[0];

  while (childElement) {
    nodeElement = childElement;
    childElement = nodeElement.children[0];
  }
  return nodeElement;
}
