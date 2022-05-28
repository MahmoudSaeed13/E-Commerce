const placeOrderBtn = document.querySelector('.place-order-btn');
placeOrderBtn.addEventListener('click', () => {
  let address = getAddress();
  if (address) {
    orderDetails = {
      ...address,
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    showAlert('order completed successfully', 'success');
    localStorage.removeItem('cart');
    setTimeout(() => {
      location.href = 'index.html';
    }, 3000);
  }
});

const getAddress = () => {
  let address = document.querySelector('#address').value;
  let street = document.querySelector('#street').value;
  let state = document.querySelector('#state').value;
  let city = document.querySelector('#city').value;
  let pincode = document.querySelector('#pincode').value;
  let landmark = document.querySelector('#landmark').value;
  if (
    !address.length ||
    !street.length ||
    !city.length ||
    !state.length ||
    !pincode.length ||
    !landmark.length
  ) {
    return showAlert('you must fill all the inputs first');
  } else {
    return { address, street, city, state, pincode, landmark };
  }
};

const showAlert = (msg, type) => {
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  let alertImg = document.querySelector('.alert-img');
  alertMsg.innerHTML = msg;
  if (type == 'success') {
    alertImg.src = './imgs/success.png';
    alertMsg.style.color = '#0ab50a';
  } else {
    alertImg.src = './imgs/error.png';
    alertMsg.style.color = null;
  }
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
};

if (!localStorage.getItem('usr')) {
  location.href = 'login.html';
}
