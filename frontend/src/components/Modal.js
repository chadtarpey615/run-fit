import React from 'react'
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group"
import BackDrop from "../components/BackDrop"
import "../style/Modal.css"

const Overlay = (props) => {
    const content = (
        <div className={`modal `} style={props.style}>
            <header className={`modal-header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault}>
                <div className={`modal-content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal-footer ${props.footer}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )

    return ReactDOM.createPortal(content, document.getElementById("modal"))
}
const Modal = (props) => {
    return (
        <>
            {props.show && <BackDrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="modal">
                <Overlay {...props} />


            </CSSTransition>
        </>
    )
}

export default Modal
