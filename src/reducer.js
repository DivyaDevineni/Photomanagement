const initialState = {
  searchphotos: [],
  unlikephotos: [],
  msg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_SEARCHPHOTOS":
      return {
        ...state,
        searchphotos: action.payload,
        msg: action.payload.length > 0 ? "" : "No Photos Found",
      };

    case "UNLIKE_PHOTO":
      return {
        ...state,
        unlikephotos: [action.payload, ...state.unlikephotos],
      };
    case "REMOVE_UNLIKE":
      return {
        ...state,
        unlikephotos: state.unlikephotos.filter(
          (photo) => photo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
