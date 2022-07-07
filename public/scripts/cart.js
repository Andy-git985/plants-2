const label = document.querySelector('#label');
const shoppingCart = document.querySelector('#shopping-cart');

const basket = JSON.parse(localStorage.getItem('data')) || [];

const calculation = () => {
  const cartIcon = document.querySelector('#cartAmount');
  cartIcon.textContent = basket.map((x) => x.item).reduce((p, c) => p + c, 0);
};

calculation();

const generateCartItems()