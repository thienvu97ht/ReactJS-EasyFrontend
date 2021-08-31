const { createSlice } = require('@reduxjs/toolkit');

const cartSlide = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, action) {
      // newItem = { id, product, quantity }
      const newItem = action.payload;
      const index = state.cartItem.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        // San pham da co trong gio hang
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        // San pham chua co trong gio hang
        state.cartItem.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //   check if product is available in cart
      const index = state.cartItem.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItem = state.cartItem.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlide;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
