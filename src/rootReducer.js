import { combineReducers } from "redux";
import photoslist from "./photosList/reducer";
import searchphotoslist from "./reducer";

export default combineReducers({
  photoslist,
  searchphotoslist,
});
