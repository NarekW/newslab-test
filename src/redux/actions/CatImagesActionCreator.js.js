export const ADD_IMAGES = "ADD_TODO";

export function CatImagesActionCreator(images) {
    return {
      type: ADD_IMAGES,
      images,
    }
  }