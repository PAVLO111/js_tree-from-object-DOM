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
  element = document.createElement('ul');

  for (const key in data) {
    const firstList = document.createElement('li');

    firstList.textContent = key;

    element.append(firstList);
    document.body.append(element);

    const testLength = Object.keys(data[key]).length;

    if (testLength !== 0) {
      const next = createTree(firstList, data[key]);

      firstList.append(next);
    }
  }

  return element;
}

createTree(tree, food);
