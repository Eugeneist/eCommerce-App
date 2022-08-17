import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
