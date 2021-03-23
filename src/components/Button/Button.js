import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css"

const Button = ({text, fetchPictures}) => (
    <button className={styles.Button} type="button" onClick={()=>fetchPictures()}>{text}</button>
)

Button.prototype = {
    text: PropTypes.string.isRequired,
    fetchPictures: PropTypes.func.isRequired
}

export default Button;