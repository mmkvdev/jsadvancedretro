// Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [{ name: "Chocolate", price: 10 }],
  purchases: [{ name: "Chocolate", price: 10 }],
};

class Cart {
  constructor(user) {
    this.user = user;
  }

  addTax(item) {
    return (item.price *= 1.03);
  }

  addItem(item) {
    item.price = this.addTax(item);
    this.user.cart.push(item);
    console.log({ cart: JSON.stringify(this.user) });
  }

  buyItem() {
    this.user.purchases.push(this.user.cart.pop());
    console.log({ purchases: JSON.stringify(this.user) });
  }

  emptyCart() {
    this.user.cart.push([]);
  }

  getUser() {
    return this.user;
  }
}

const myCart = new Cart(user);
myCart.addItem({ name: "grapes", price: 1 });
myCart.buyItem();
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
