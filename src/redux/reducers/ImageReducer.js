import { ADD_IMAGES } from "../actions/CatImagesActionCreator.js";

const initialState = {
    images:[]
}

export default function ImageReducer(newState = initialState, action) {
  if (action.type === ADD_IMAGES) {
    const images = action.images;
    return { ...initialState, images }
  }
  return newState
}