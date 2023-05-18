export const cartReducer = (state, action) => {
  const { type, payloard } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payloard.products };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payloard.products };

    case "UPDATE_TOTAL":
      return { ...state, total: payloard.total };

    default:
      throw new Error("No case found in cart Reducer");
  }
};
