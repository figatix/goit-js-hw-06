/*
Завдання 2
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

? Напиши скрипт, який для кожного елемента масиву ingredients:

? 1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
? 2) Додасть назву інгредієнта як його текстовий вміст.
? 3) Додасть елементу клас item.
? 4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const arrayIngredients = []

ingredients.forEach(el => {
  const itemEl = document.createElement('li');

  itemEl.innerHTML = `${el}`;
  itemEl.classList.add('item');
  arrayIngredients.push(itemEl)
});

ingredientsEl.append(...arrayIngredients);


// const arrayIngredients = ingredients.reduce((acc, el) => {
//   const itemEl = document.createElement('li');
  
//   itemEl.innerHTML = `${el}`;
//   itemEl.classList.add('item');

//   return [...acc, itemEl];
// }, []);

// console.log(arrayIngredients);

// ingredientsEl.append(...arrayIngredients);
