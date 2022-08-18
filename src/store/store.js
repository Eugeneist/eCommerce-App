import { createStore } from "redux";

import rootReducer from "../reducres";

const store = createStore(rootReducer);

export default store;
