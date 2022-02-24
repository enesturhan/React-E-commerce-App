export const addToCart = (cartItem) => {
  console.log("addToCart", cartItem);

  return { type: "addToCart", payload: cartItem };
};

export const clearCart = () => {
  return { type: "clearCart", payload: [] };
};

export const removeFromCart = (id) => {
  return { type: "removeFromCart", payload: { id: id } };
};

export const increaseQuantity = (productId) => {
  return { type: "IncreaseQuantity", payload: { id: productId } };
};

export const decreaseQuantity = (productId) => {
  return { type: "DecreaseQuantity", payload: { id: productId } };
};
