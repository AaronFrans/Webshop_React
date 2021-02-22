import { createSlice } from "@reduxjs/toolkit";

const checkedSlice = createSlice({
  name: "itemsOrdered",
  initialState: [],

  reducers: {
    addItemToCart: (state, action) => {
      let index = state.findIndex((item) => {
        if (item.id === action.payload.id) return true;
        else return false;
      });
      if (index === -1) {
        let item = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        };
        state.push(item);
      } else {
        state[index].quantity += 1;
      }
    },
    removeItemFromCart: (state, action) => {
      let index = state.findIndex((item) => {
        if (item.id === action.payload) return true;
        else return false;
      });

      if (index !== -1) {
        if (state[index].quantity > 0) {
          state[index].quantity -= 1;

          if (state[index].quantity === 0) state.splice(index, 1);
        } else {
          state.splice(index, 1);
        }
      }
    },
    removeAllItems: (state) => {
      while (state.length > 0) {
        state.pop();
      }
    },
  },
});

export const { actions, reducer } = checkedSlice;
export const { addItemToCart, removeItemFromCart, removeAllItems } = actions;
