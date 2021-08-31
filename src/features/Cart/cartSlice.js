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
  },
});

const { actions, reducer } = cartSlide;
export const { showMiniCart, hideMiniCart } = actions;
export default reducer;
