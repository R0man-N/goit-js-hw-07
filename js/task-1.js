const categoriesList = document.getElementById('categories');
const categoriesItems = document.querySelectorAll('#categories .item');

// Рахуємо та виводимо кількість категорій в консоль
const categoriesCount = categoriesItems.length;
console.log(`Кількість категорій: ${categoriesCount}`);

// Для кожного елемента li.item виведемо текст заголовку та кількість елементів у категорії
categoriesItems.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElementsCount = category.querySelectorAll('ul li').length;
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElementsCount}`);
});
