/*
Напиши скрипт, який:

? Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
? Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/

const categoriesEl = document.querySelector('#categories');
const numbersOfCategories = categoriesEl.children.length
console.log(`Numbers of categories: ${numbersOfCategories}`);

const x = [...categoriesEl.children].forEach((el) => {
  const titleOfCategory = el.children[0].textContent;
  const totalEl = el.children[1].children.length

  console.log('Category:', titleOfCategory);
  console.log('Elements:', totalEl);
})
