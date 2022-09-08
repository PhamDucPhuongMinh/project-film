import { combineReducers } from "redux";
import carouselReducer from "./reducers/carouselReducer";
import cardsHomeReducer from "./reducers/cardsHomeReducer";

const rootReducer = combineReducers({ carouselReducer, cardsHomeReducer });

export default rootReducer;
