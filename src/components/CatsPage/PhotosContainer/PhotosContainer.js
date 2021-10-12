import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatImagesActionCreator } from "../../../redux/actions/CatImagesActionCreator.js.js";
import GetData from "../../../redux/asyncActions/GetData.js";
import NextPageButton from "./NextPageButton/NextPageButton.js";
import Photo from "./Photo/Photo";

const PhotosContainer = (props) => {
  const dispatch = useDispatch();
  const [dataStatus, setDataStatus] = useState(false);

  const images = useSelector((state) => state.ImageReducer.images);
  const { categoryID, pageID } = props.urlParams;

  useEffect(() => {
    const clearState = [];
    dispatch(CatImagesActionCreator(clearState));
    dispatch(GetData(pageID, categoryID));
  }, [props.urlParams, dispatch, pageID, categoryID]);

  useEffect(() => {
    if (!dataStatus) {
      dispatch(GetData(pageID, categoryID));
      setDataStatus(true);
    }
  }, [dataStatus, dispatch, pageID, categoryID]);

  const showMoreClickHandler = (e) => {
    dispatch(GetData());
  };

  return (
    <div className="images-container">
      <h3>Category: {categoryID}</h3>
      {images.length > 1 ? (
        images.map((element, index) => <Photo key={index} URL={element.url} />)
      ) : (
        <p>...loading</p>
      )}
      <NextPageButton
        showMoreClickHandler={showMoreClickHandler}
        urlParams={props.urlParams}
      />
    </div>
  );
};
export default PhotosContainer;
