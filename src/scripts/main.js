'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const myTree = document.createElement('ul');

  for (const key in data) {
    const firstList = document.createElement('li');

    firstList.textContent = key;

    myTree.append(firstList);
    document.body.append(myTree);

    const testLength = Object.keys(data[key]).length;

    if (testLength !== 0) {
      const next = createTree(null, data[key]);

      firstList.append(next);
    }
  }

  return myTree;
}

createTree(tree, food);
