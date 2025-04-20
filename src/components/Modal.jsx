import {useNavigate} from 'react-router-dom'; // hook
import classes from './Modal.module.css';

// De-structure props to children (NewPost)
// Use children prop to create a component (Modal) that can be used 
// as a wrapper around another component (NewPost in PostsList)

// "true" is default value for "open" prop - required for dialog to be visible

// onClick => default event listener

function Modal({children}) {
    // Use react-router-dom hook useNavigate()
    const navigate = useNavigate(); // function

    function closeHandler() {
        navigate('..'); // or navigate('/');
    }

    return <>
    <div className={classes.backdrop} onClick={closeHandler} />
    <dialog open className={classes.modal} >
        {children}
    </dialog>
    </>
}

export default Modal;