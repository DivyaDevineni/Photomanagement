import axios from "axios";

export const getPhotos = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.unsplash.com/photos?client_id=yIO_P0xIVw6q8opfNqyFdf4NHSnfXxKTA3a1oF5yPCQ"
    );
    console.log(res);
    dispatch({
      type: "GET_PHOTOS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("getPhotos action called");
};
