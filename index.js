function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('app').querySelector('#nested .target');
}

Define a function nestedTarget() that pulls a .target out of #nested 
(# is used for IDs in selectors — but you knew that because you read the docs, 
  right? :) ). (Note that in index.html #nested and .target just happen to be divs.
     This method should work with arbitrary elements.)
