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
  var main = document.querySelector('div#grand-node');
  var nestedChild = main.children[0];

  while (nestedChild === defined) {
    main = nestedChild;
    nestedChild = main.children[0];
  }
  return main;
}
