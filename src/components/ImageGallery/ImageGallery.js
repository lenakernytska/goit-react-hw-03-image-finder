import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css"



const ImageGallery = ({pictures, onClick}) => 
    (<ul className={styles.ImageGallery} onClick={onClick}>
        {pictures.map(({ id, webformatURL, tags, largeImageURL }) =>
        (<li key={id}
        className={styles.ImageGalleryItem}>
            <ImageGalleryItem url={webformatURL} alt={tags} largeImage={largeImageURL} />
           </li>))}
    </ul>
);

ImageGallery.propTypes = {
     pictures: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.number.isRequired,
         webformatURL: PropTypes.string.isRequired,
         tags: PropTypes.string.isRequired,
         largeImageURL: PropTypes.string.isRequired
     })).isRequired,
    onClick: PropTypes.func.isRequired,
   }

export default ImageGallery;