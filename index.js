function getFirstSelector(selector) {
  const selector = document.querySelector('selector');
  return selector;
}

/*
  describe('getFirstSelector(selector)', () => {
    it('returns the first element that matches the selector', () => {
      expect(getFirstSelector('div').id).toEqual('nested')
      expect(getFirstSelector('.ranked-list')).toEqual(document.querySelector('.ranked-list'))
    })
  })

function nestedTarget() {
    that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). 
    (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
}  

  describe('nestedTarget()', () => {
    it('pulls a .target out of #nested', () => {
      expect(nestedTarget()).toEqual(document.querySelector('#nested .target'))
    })
  })

function increaseRankBy(n) {
    that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
}
  

  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
      }

      children = secondList.children
      start = 12

      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
      }
    })
  })
})

function deepestChild() {
  that pulls out the most deeply nested child from div#grand-node.
  (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
  This is challenging to implement correctly, but not beyond your ability!)
  
    describe('deepestChild()', () => {
  it('returns the most deeply nested child in #grand-node', () => {
    console.log(deepestChild().innerHTML)
    expect(deepestChild()).toBe(document.querySelector('#grand-node div div div div'))
  })
})
