import { combineReducers } from "redux";
import carouselReducer from "./reducers/carouselReducer";

const rootReducer = combineReducers({ carouselReducer });

export default rootReducer;
