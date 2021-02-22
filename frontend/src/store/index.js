import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/slice";
import { loadState, saveState } from "./localStorage";

import { throttle } from "lodash";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const loadedStateFromLocalStorage = loadState();

export const store = configureStore({
  reducer: rootReducer,
  
  preloadedState: loadedStateFromLocalStorage,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
