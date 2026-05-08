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

    // element.append(firstList);
    document.body.append(firstList);

    const testLength = Object.keys(data[key]).length;

    // console.log(testLength);

    if (testLength > 0) {
      const ul = document.createElement('ul');

      firstList.append(ul);

      createTree(null, data[key]);
    }
  }

  return element;
}

// if (tree) {
//   createTree(tree, food);
// }

createTree(tree, food);

// ====

// 'use strict';

// const food = {
//   Drink: {
//     Wine: {},
//     Schnaps: {},
//   },
//   Fruit: {
//     Red: {
//       Cherry: {},
//       Strawberry: {},
//     },
//     Yellow: {
//       Banana: {},
//       Pineapple: {},
//     },
//   },
// };

// const tree = document.querySelector('#tree');

// function createTree(element, data) {
//   // Твій основний цикл, який ти писав спочатку
//   for (const key in data) {
//     const firstList = document.createElement('li');

//     firstList.textContent = key;

//     // Додаємо пункт у поточний список (element)
//     element.append(firstList);

//     // Перевіряємо, чи є вкладені елементи
//     const test = Object.keys(data[key]).length;

//     if (test > 0) {
//       // Якщо є вкладеність, створюємо НОВИЙ список для цього рівня
//       const nestedUl = document.createElement('ul');

//       // Додаємо цей список всередину нашого li
//       firstList.append(nestedUl);

//       // Викликаємо функцію знову для вкладеного списку
//       // Це і є та сама рекурсія, яка замінює твій цикл "next"
//       createTree(nestedUl, data[key]);
//     }
//   }
// }

// // Запускаємо один раз для головного контейнера
// // if (tree) {
// //   createTree(tree, food);
// // }

// createTree(tree, food);
