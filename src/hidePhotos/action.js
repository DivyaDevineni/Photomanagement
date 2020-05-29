export const removeHidden = (photo) => async (dispatch) => {
  try {
    dispatch({
      type: "REMOVE_UNLIKE",
      payload: photo,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("unlikePhotos action called");
};
