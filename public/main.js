const addToCart = document.querySelectorAll('#addToCart');

const basket = JSON.parse(localStorage.getItem('data')) || [];

addToCart.forEach((btn) =>
  btn.addEventListener('click', () => {
    // console.log(btn.dataset.id);
    const selectedItem = btn.dataset.id;
    const search = basket.find((x) => x.id === selectedItem);
    if (search === undefined) {
      basket.push({
        id: selectedItem,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    localStorage.setItem('data', JSON.stringify(basket));
    calculation();
  })
);

const calculation = () => {
  const cartIcon = document.querySelector('#cartAmount');
  cartIcon.textContent = basket.map((x) => x.item).reduce((p, c) => p + c, 0);
};

calculation();
