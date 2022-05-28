const dProd = document.querySelector('.product-details');
const productID = location.search.slice(1).split('=')[1];
const productDetails = JSON.parse(localStorage.getItem('products')).find(
  (prod) => {
    return prod.id == productID;
  }
);

shoesSize = `
<div class="d-flex justify-content-between">
  <input type="radio" name="size" value="39" hidden id="39-size" checked />
  <label for="39-size" class="size-radio-btn check">39</label>
  <input type="radio" name="size" value="40" hidden id="40-size" />
  <label for="40-size" class="size-radio-btn">40</label>
  <input type="radio" name="size" value="41" hidden id="41-size" />
  <label for="41-size" class="size-radio-btn">41</label>
  <input type="radio" name="size" value="42" hidden id="42-size" />
  <label for="42-size" class="size-radio-btn">42</label>
  <input type="radio" name="size" value="43" hidden id="43-size" />
  <label for="43-size" class="size-radio-btn">43</label>
</div>
`;

shirtsSize = `
<div class="d-flex justify-content-between">
  <input type="radio" name="size" value="s" hidden id="s-size" checked />
  <label for="s-size" class="size-radio-btn check">s</label>
  <input type="radio" name="size" value="m" hidden id="m-size" />
  <label for="m-size" class="size-radio-btn">m</label>
  <input type="radio" name="size" value="l" hidden id="l-size" />
  <label for="l-size" class="size-radio-btn">l</label>
  <input type="radio" name="size" value="xl" hidden id="xl-size" />
  <label for="xl-size" class="size-radio-btn">xl</label>
  <input type="radio" name="size" value="xxl" hidden id="xxl-size" />
  <label for="xxl-size" class="size-radio-btn">xxl</label>
</div>
`;

function displayProd() {
  dProd.innerHTML = `
  <div class="image-slider col-12 col-md-6">
  <div class="product-images">
    <img src="./images/${productDetails.imgs[0]}" class="active" />
    <img src="./images/${productDetails.imgs[1]}" />
    <img src="./images/${productDetails.imgs[2]}" />
    <img src="./images/${productDetails.imgs[3]}" />
  </div>
  </div>
  <div class="details col-12 col-md-5 py-5">
  <h2 class="product-brand">${productDetails.title}</h2>
  <p class="product-short-des">
    ${productDetails.shortDes}
  </p>
  <span class="product-price">$${
    productDetails.price -
    (productDetails.price * productDetails.discount) / 100
  }</span>
  <span class="product-actual-price">$${productDetails.price}</span>
  <span class="product-discount">( ${productDetails.discount}% off )</span>
  <p class="product-sub-heading">select size</p>
  ${productDetails.type == 'Shirts' ? shirtsSize : shoesSize}
  <button class="cart-btn">add to cart</button>
  </div>
  `;
}
displayProd();

const productImages = document.querySelectorAll('.product-images img');
const productImageSlide = document.querySelector('.image-slider');
let activeImageSlide = 0;

productImageSlide.style.backgroundImage = `url('${productImages[0].src}')`;
productImages.forEach((item, i) => {
  item.addEventListener('click', () => {
    productImages[activeImageSlide].classList.remove('active');
    item.classList.add('active');
    productImageSlide.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  });
});

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  item.addEventListener('click', () => {
    sizeBtns[checkedBtn].classList.remove('check');
    item.classList.add('check');
    checkedBtn = i;
  });
});

document.querySelector('title').innerHTML += ` ${productDetails.title}`;

const addToCart = document.querySelector('.cart-btn');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

addToCart.addEventListener('click', () => {
  if (localStorage.getItem('cart')) {
    if (
      !cart.find((prod) => {
        return prod.id == productID;
      })
    ) {
      cart.push(productDetails);
      localStorage.setItem('cart', JSON.stringify(cart));
      addToCart.innerHTML = 'added';
    }
  } else {
    localStorage.setItem('cart', JSON.stringify([productDetails]));
    addToCart.innerHTML = 'added';
  }
});
addToCart.innerHTML = cart.find((prod) => {
  return prod.id == productID;
})
  ? 'added'
  : 'add to cart';
