import React from "react";
import { useParams } from "react-router";
import Catgeories from "./Categories/Categories";
import PhotosContainer from "./PhotosContainer/PhotosContainer";

const CatsPage = (props) => {
  const { categoryID, pageID } = useParams();
  const urlParams = {
    categoryID,
    pageID,
  };
  return (
    <div className="catsPageRoot">
      <Catgeories urlParams={urlParams} />
      <PhotosContainer urlParams={urlParams} />
    </div>
  );
};

export default CatsPage;
