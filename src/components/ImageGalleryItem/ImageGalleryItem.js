import React from "react";
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({url,alt,largeImage}) => (
    <>
<img src={url} alt={alt} data-image={largeImage} className={styles.ImageGalleryItemImage}></img>
    </>
        
)

export default ImageGalleryItem;