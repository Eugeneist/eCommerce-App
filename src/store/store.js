import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../reducres";

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export default store;
