import classes from './Modal.module.css';

// De-structure props to children (NewPost)
// Use children prop to create a component (Modal) that can be used 
// as a wrapper around another component (NewPost in PostsList)

// "true" is default value for "open" prop - required for dialog to be visible

// onClick => default event listener

function Modal({children, onClose}) {
    return <>
    <div className={classes.backdrop} onClick={onClose} />
    <dialog open className={classes.modal} >
        {children}
    </dialog>
    </>
}

export default Modal;