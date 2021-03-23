import React, {Component} from "react";
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';
import styles from "./Modal.module.css"

const modalRoot=document.querySelector("#modal-root")


class Modal extends Component{

     static propTypes = {
    onClose: PropTypes.func.isRequired,
    }

    componentDidMount () {
        window.addEventListener('keydown', this.handleKeydown)
    };

      componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
}

    handleKeydown = (event) => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    }

    render() {
        return createPortal(<div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{this.props.children}
        </div>
    </div>, modalRoot)
    }
}



export default Modal;