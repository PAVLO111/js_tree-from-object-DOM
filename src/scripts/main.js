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
  const tree = document.createElement('ul');

  // tree.textContent = 'Hello World!';

  for (const key in data) {
    const firstList = document.createElement('li');

    firstList.textContent = key;

    tree.append(firstList);
    document.body.append(tree);

    const test = Object.keys(data[key]).length;

    let nested = data[key];

    if (test !== 0) {
      const next = createTree(null, data[key]);
      firstList.append(next)
    }
  }

  return tree;
}

createTree(tree, food);

// console.log(food);
// console.log(food.Drink);



// ====

    // function next() {
    //   // console.log(data[key]);
    //   for (const el in data[key]) {
    //     // console.log(el);

    //     const secondList = document.createElement('ul');
    //     firstList.append(secondList);

    //     const valueSeconList = document.createElement('li');
    //     secondList.append(valueSeconList);

    //     valueSeconList.textContent = el;
    //   }

    //   // firstList.append(secondList);
    //   // secondList.append(valueSeconList);
    // }

    // if (test !== 0) {
    //   // console.log(data[key]);
    //   next(nested);
    // }

    // ====

    // Move function declaration to function body root

    // for (const el in data[key]) {
    //   console.log(el);

    //   const secondList = document.createElement('ul');
    //   firstList.append(secondList);

    //   const valueSeconList = document.createElement('li');
    //   secondList.append(valueSeconList);

    //   valueSeconList.textContent = el;
    // }
