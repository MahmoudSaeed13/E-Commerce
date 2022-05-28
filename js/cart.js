const cart = document.querySelector('.cart');

function showCart() {
  let totalBill = 0;
  if (
    !JSON.parse(localStorage.getItem('cart')) ||
    JSON.parse(localStorage.getItem('cart')).length == 0
  ) {
    cart.innerHTML = `<img src="./imgs/empty-cart.png" class="empty-img" />`;
    document.querySelector('.bill').innerHTML = `$00`;
  } else {
    JSON.parse(localStorage.getItem('cart')).forEach((prod) => {
      cart.innerHTML += `
            <div class="sm-product">
            <img src="./images/${prod.imgs[0]}" class="sm-product-img" />
            <div class="sm-text">
              <p class="sm-product-name">${prod.title}</p>
              <p class="sm-des">${prod.shortDes}</p>
            </div>
            <p class="sm-price">$${
              prod.price - (prod.price * prod.discount) / 100
            }</p>
            <button class="sm-delet-btn" onclick="xDelete(${
              prod.id
            })"><img src="./imgs/close.png" /></button>
            </div>
            `;
      totalBill += prod.price - (prod.price * prod.discount) / 100;
    });
    document.querySelector('.bill').innerHTML = `$${totalBill}`;
  }
}
showCart();

function xDelete(id) {
  let cartProd = JSON.parse(localStorage.getItem('cart'));
  cartProd = cartProd.filter((prod) => {
    return prod.id != id;
  });
  localStorage.setItem('cart', JSON.stringify(cartProd));
  cart.innerHTML = '';
  showCart();
}
