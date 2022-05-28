const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

const shirtsSlider = document.querySelector('.shirts');
const shoesSlider = document.querySelector('.shoes');
const bestSelling = document.querySelector('.best-selling');

function homeSlider() {
  let bestSellingProd = JSON.parse(localStorage.getItem('products')).filter(
    (prod) => {
      return prod.price > 140;
    }
  );
  let shirtsProd = JSON.parse(localStorage.getItem('products')).filter(
    (prod) => {
      return prod.type == 'Shirts';
    }
  );
  let shoesProd = JSON.parse(localStorage.getItem('products')).filter(
    (prod) => {
      return prod.type == 'Shoes';
    }
  );
  bestSellingProd.forEach((prod) => {
    bestSelling.innerHTML += `
    <div class="product-card" onclick="prodPage(${prod.id})">
    <div class="product-image">
      <span class="discount-tag">${prod.discount}% off</span>
      <img src="./images/${prod.imgs[0]}" class="product-thumb" />
      <button class="card-btn">add to cart</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">${prod.title}</h2>
      <p class="product-short-des">
        ${prod.shortDes}
      </p>
      <span class="price">${
        prod.price - (prod.price * prod.discount) / 100
      }$</span><span class="actual-price">${prod.price}$</span>
    </div>
    </div>
    `;
  });
  shirtsProd.forEach((prod) => {
    shirtsSlider.innerHTML += `
    <div class="product-card" onclick="prodPage(${prod.id})">
    <div class="product-image">
      <span class="discount-tag">${prod.discount}% off</span>
      <img src="./images/${prod.imgs[0]}" class="product-thumb" />
      <button class="card-btn">add to cart</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">${prod.title}</h2>
      <p class="product-short-des">
        ${prod.shortDes}
      </p>
      <span class="price">${
        prod.price - (prod.price * prod.discount) / 100
      }$</span><span class="actual-price">${prod.price}$</span>
    </div>
    </div>
    `;
  });
  shoesProd.forEach((prod) => {
    shoesSlider.innerHTML += `
    <div class="product-card" onclick="prodPage(${prod.id})">
    <div class="product-image">
      <span class="discount-tag">${prod.discount}% off</span>
      <img src="./images/${prod.imgs[0]}" class="product-thumb" />
      <button class="card-btn">add to cart</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">${prod.title}</h2>
      <p class="product-short-des">
        ${prod.shortDes}
      </p>
      <span class="price">${
        prod.price - (prod.price * prod.discount) / 100
      }$</span><span class="actual-price">${prod.price}$</span>
    </div>
    </div>
    `;
  });
}
if (shirtsSlider) {
  homeSlider();
}

function prodPage(id) {
  location.href = `product.html?id=${id}`;
}
