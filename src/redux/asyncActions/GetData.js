import axios from "axios";
import { CatImagesActionCreator } from "../actions/CatImagesActionCreator.js";

function GetData(pageID = 1, categoryID = 1) {
  return (dispatch, getState) => {
    const { images } = getState().ImageReducer;

    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${pageID}&category_ids=${categoryID}`
      )
      .then((res) => {
        const resImages = images.concat(res.data);
        dispatch(CatImagesActionCreator(resImages));
      });
  };
}

export default GetData;
