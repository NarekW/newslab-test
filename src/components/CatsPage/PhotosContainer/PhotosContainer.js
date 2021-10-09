import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatImagesActionCreator } from "../../../redux/actions/CatImagesActionCreator.js";
import NextPageButton from "./NextPageButton/NextPageButton.js";
import Photo from "./Photo/Photo";


const PhotosContainer = (props) => {
    const dispatch = useDispatch();
    const [dataStatus, setDataStatus] = useState(false);

    const images = useSelector(state => state.ImageReducer.images);
    const { categoryID, pageID } = props.urlParams;


    function GetData(){
        return axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${pageID}&category_ids=${categoryID}`)
        .then(res => {

            const resImages = images.length === 0 ? res.data : images.concat(res.data);
            dispatch(CatImagesActionCreator(resImages));
            setDataStatus(true);
        });
    }

    useEffect(() => {   // get new props
        dispatch(CatImagesActionCreator([])); //clear []
        GetData();
        // eslint-disable-next-line
    }, [props.urlParams]);

    useEffect(()=>{     //componentDidmount
        if (!dataStatus) {
            GetData(); 
        }
    });

    const showMoreClickHandler = (e) => {
        GetData();
    }
    return(
        <div className="images-container">
            <h3>Category: {categoryID}</h3>
            {
                images ? images.map((element, index) =><Photo 
                    key = {index} 
                    URL = {element.url} />)
                :'...loading'
            }
            <NextPageButton 
                showMoreClickHandler={showMoreClickHandler}  
                urlParams={props.urlParams} />
        </div>
    )
}
export default PhotosContainer;