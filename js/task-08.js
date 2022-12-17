/*
  Завдання 8
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

? Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
? Під час відправлення форми сторінка не повинна перезавантажуватися.
? Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
? Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
? Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const formEl = document.querySelector('.login-form')
const emailInputEl = document.querySelector('[type="email"]')
const passwordInputEl = document.querySelector('[type="password"]')
const btntEl = document.querySelector('[type="submit"]')

function onSendForm(event) {
  event.preventDefault()

  if (emailInputEl.value.trim() === '' || passwordInputEl.value.trim() === '') {
    alert('Всі поля повинні бути заповнені')
    return
  }

  const {elements: { email, password }} = event.currentTarget;
  // console.log(event.currentTarget) 
  const userObj = {
    email : email.value,
    password : password.value,
  }

  console.log('User object', userObj);
  // console.log(email.value, password.value);
  formEl.reset()

}


formEl.addEventListener('submit', onSendForm)












