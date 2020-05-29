import axios from "axios";
import { ClientId } from "../config";

export const getsearchPhotos = (query) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${ClientId}`
    );
    console.log(res);
    dispatch({
      type: "GET_SEARCHPHOTOS",
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("getsearchPhotos action called");
};

export const unLike = (photo) => async (dispatch) => {
  try {
    dispatch({
      type: "UNLIKE_PHOTO",
      payload: photo,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("unlikePhotos action called");
};
