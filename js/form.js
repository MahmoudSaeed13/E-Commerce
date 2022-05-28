// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-cond') || null;
const notification = document.querySelector('#notification') || null;
const loader = document.querySelector('.loader');

submitBtn.addEventListener('click', () => {
  if (name != null) {
    // sign up
    if (name.value.length < 3) {
      showAlert('name must be 3 letters long');
    } else if (!email.value.length) {
      showAlert('enter your email');
    } else if (password.value.length < 8) {
      showAlert('password should be 8 letters long');
    } else if (!number.value.length) {
      showAlert('enter your phone number');
    } else if (!Number(number.value.length) || number.value.length < 10) {
      showAlert('invalid number! please enter a valid number');
    } else if (!tac.checked) {
      showAlert('you must agree to our terms and conditions');
    } else {
      loader.style.display = 'block';
      var allUsers = JSON.parse(localStorage.getItem('users'));
      var newUser = {
          id:allUsers.length+1,
          name: name.value,
          email: email.value,
          password: password.value,
          number: number.value,
      }
      allUsers.push(newUser);
      localStorage.removeItem('users');
      console.log(allUsers);
      localStorage.setItem(
        'users',
        JSON.stringify(
          allUsers
      )
      );

      localStorage.setItem(
        'usr',
        JSON.stringify([
          newUser,
        ])
      );
      setTimeout(() => {
        location.href = 'index.html';
      }, 3000);
    }
  } else {
    // login
    if (!email.value.length || !password.value.length) {
      showAlert('please fill all the inputs');
    } else {
      loader.style.display = 'block';
      let userData = JSON.parse(localStorage.getItem('users')).filter((usr) => {
        return usr.email == email.value && usr.password == password.value;
      });
      if (userData.length != 0) {
        localStorage.setItem('usr', JSON.stringify(userData));
        setTimeout(() => {
          location.href = 'index.html';
        }, 3000);
      } else {
        showAlert('incorect email or password');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 3000);
      }
    }
  }
});

const showAlert = (msg) => {
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  alertMsg.innerHTML = msg;
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
};

if (localStorage.getItem('usr')) {
  location.href = 'index.html';
}
