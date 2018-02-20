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
  var tree = document.querySelector('#grand-node');
  var leaf = tree.children[0];

  while (leaf !== undefined) {
    leaf = tree;
    tree = tree.children[0];
  }
  return leaf.innerHTML;
}
