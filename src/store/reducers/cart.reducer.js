import { CartService } from "../../services/cart.service";

const cartInitialState = CartService.getCart();

export const cartReducer = (state = cartInitialState, action) => {
  // delete işleminde action payload id geliyor
  // add işleminde ise action payload object geliyor.
  // select işleminde de action payload üzerinden yine id göndereceğiz.

  switch (action.type) {
    case "addToCart":
      // logic cart service içerisine koyuldu
      const cart = CartService.addToCart(action.payload);

      return {
        ...state, // state üzerindeki sadece products propertysini güncelliyoruz.
        cartItems: [...cart.cartItems],
        total: cart.total,
      };
    case "clearCart":
      CartService.clearCart(); // localstorage temizleme

      return {
        ...state,
        total: 0,
        cartItems: action.payload,
      };
    case "removeFromCart":
      const _cart = CartService.remove(action.payload.id);

      return {
        ...state,
        total: _cart.total,
        cartItems: _cart.cartItems,
      };
    case "IncreaseQuantity":
      const _cartItem = CartService.increaseCartItem(action.payload.id);

      return {
        ...state,
        total: _cartItem.total,
        cartItems: _cartItem.cartItems,
      };

    case "DecreaseQuantity":
      const _cartItem2 = CartService.decreaseCartItem(action.payload.id);

      return {
        ...state,
        total: _cartItem2.total,
        cartItems: _cartItem2.cartItems,
      };
    default:
      return state;
  }
};
