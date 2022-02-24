export const CartService = {};

CartService.remove = (id) => {
  const cartJsonString = localStorage.getItem("cartState");

  if (cartJsonString != null) {
    const cartJsonObject = JSON.parse(cartJsonString);

    const newCartItems = cartJsonObject.cartItems.filter(
      (x) => x.productId != id
    );

    let _total = 0;

    newCartItems.forEach((cartItem) => {
      _total += Number(cartItem.price) * Number(cartItem.quantity);
    });

    const cart = {
      total: _total,
      cartItems: [...newCartItems],
    };

    localStorage.removeItem("cartState");
    localStorage.setItem("cartState", JSON.stringify(cart));

    return cart;
  }

  return {
    total: 0,
    cartItems: [],
  };
};

CartService.increaseCartItem = (productId) => {
  const cartJsonString = localStorage.getItem("cartState");

  if (cartJsonString == null) return CartService.getCart();

  const cartJsonObject = JSON.parse(cartJsonString);

  const findedCartItem = cartJsonObject.cartItems.find(
    (x) => x.productId === productId
  );

  if (findedCartItem === undefined) return CartService.getCart();

  let _total = 0;

  findedCartItem.quantity += 1;

  for (const item of cartJsonObject.cartItems) {
    _total += Number(item.price) * Number(item.quantity);
  }
  const _cart = {
    total: _total,
    cartItems: cartJsonObject.cartItems,
  };

  localStorage.removeItem("cartState");
  localStorage.setItem("cartState", JSON.stringify(_cart));

  return _cart;
};

CartService.getCart = () => {
  if (localStorage.getItem("cartState") != undefined)
    return JSON.parse(localStorage.getItem("cartState"));

  return {
    total: 0,
    cartItems: [],
  };
};

CartService.clearCart = () => {
  localStorage.removeItem("cartState");
};

CartService.addToCart = (cartItem) => {
  const cartJsonString = localStorage.getItem("cartState");

  // jsonString Json.Parse ile deserialize ettik. jsonObject oldu

  console.log("cartJsonString", cartJsonString);

  if (cartJsonString != null) {
    const cartJsonObject = JSON.parse(cartJsonString);

    console.log("cartJsonObject", cartJsonObject);

    const existingCartItem = cartJsonObject.cartItems.find(
      (x) => x.productId == cartItem.productId
    );

    console.log("existingCartItem", existingCartItem);

    if (existingCartItem != undefined) {
      existingCartItem.quantity += 1;

      let _total = 0;

      for (const item of cartJsonObject.cartItems) {
        _total += Number(item.price) * Number(item.quantity);
      }

      const cart = {
        cartItems: cartJsonObject.cartItems,
        total: _total,
      };

      localStorage.removeItem("cartState"); // eski hali
      localStorage.setItem("cartState", JSON.stringify(cart)); // güncel hali

      return cart;
    } else {
      let cartItems = [cartItem, ...cartJsonObject.cartItems];

      let _total = 0;

      for (const item of cartItems) {
        _total += Number(item.price) * Number(item.quantity);
      }

      const cart = {
        cartItems: [...cartItems],
        total: _total,
      };

      localStorage.removeItem("cartState"); // eski hali
      localStorage.setItem("cartState", JSON.stringify(cart)); // güncel hali

      return cart;
    }
  } else {
    const cart = {
      cartItems: [cartItem],
      total: cartItem.quantity * cartItem.price,
    };

    localStorage.removeItem("cartState"); // eski hali
    localStorage.setItem("cartState", JSON.stringify(cart));

    return cart;
  }
};

CartService.decreaseCartItem = (productId) => {
  const cartJsonString = localStorage.getItem("cartState");

  if (cartJsonString == null) return CartService.getCart();

  const cartJsonObject = JSON.parse(cartJsonString);

  const findedCartItem = cartJsonObject.cartItems.find(
    (x) => x.productId === productId
  );

  if (findedCartItem === undefined) return CartService.getCart();

  let _total = 0;

  if (findedCartItem.quantity == 1) {
    return CartService.getCart();
  }
  findedCartItem.quantity -= 1;

  for (const item of cartJsonObject.cartItems) {
    _total += Number(item.price) * Number(item.quantity);
  }
  const _cart = {
    total: _total,
    cartItems: cartJsonObject.cartItems,
  };

  localStorage.removeItem("cartState");
  localStorage.setItem("cartState", JSON.stringify(_cart));

  return _cart;
};
