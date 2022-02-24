const productInitialState = {
  // todo ile etkileşime geçmeden önceki state ne.
  products: [],
  selectedProduct: false,
};

// ürün ile ilgili işlemleri takip edecek olan sınıf.
export const productReducer = (state = productInitialState, action) => {
  // delete işleminde action payload id geliyor
  // add işleminde ise action payload object geliyor.
  // select işleminde de action payload üzerinden yine id göndereceğiz.

  switch (action.type) {
    case "getProducts":
      return {
        ...state, // state üzerindeki sadece products propertysini güncelliyoruz.
        products: [...action.payload],
      };

    default:
      break;
  }

  return state;
};
