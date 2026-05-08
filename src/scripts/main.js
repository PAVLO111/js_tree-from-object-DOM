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
  for (const key in data) {
    const firstList = document.createElement('li');

    firstList.textContent = key;

    element.append(firstList);
    // document.body.append(firstList);

    const testLength = Object.keys(data[key]).length;

    console.log(testLength);

    if (testLength > 0) {
      const ul = document.createElement('ul');

      firstList.append(ul);

      createTree(null, data[key]);
    }
  }

  return element;
}
