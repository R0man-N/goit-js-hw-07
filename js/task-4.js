const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Відключення стандартної поведінки форми

  // Отримання значень полів та очищення від пробілів
  const emailValue = this.elements.email.value.trim();
  const passwordValue = this.elements.password.value.trim();

  // Перевірка на заповненість полів
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  // Створення об'єкта зі збереженими значеннями
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виведення об'єкта в консоль
  console.log(formData);

  this.reset();
});

