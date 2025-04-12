import {useState} from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

// If you have state that's manipulated in component A, but needed in component B, 
// you should LIFT the state UP to a component that has access to both components that need the state.
// In this case, it's the PostsList component that needs the state to pass it to Post as a value for the body prop
// and it's also the PostsList component that has access to the NewPost component which is
// the place where the state should be manipulated

function PostsList({isPosting, onStopPosting}) {
    // Register states   
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    // in conditional rendering for <Modal> you can use either null or false

    // Approach #1 - variable + condition
    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModalHandler} >
    //     <NewPost 
    //         onBodyChange={bodyChangeHandler} 
    //         onAuthorChange={authorChangeHandler} 
    //     />
    // </Modal>
    // }

    // Approach #2 - ternary
    // {modalIsVisible ? (<Modal onClose={hideModalHandler} >
    //     <NewPost 
    //         onBodyChange={bodyChangeHandler} 
    //         onAuthorChange={authorChangeHandler} 
    //     />
    // </Modal>
    // ) : false}

    // Approach #3 - &&

    return (
    <>
    {/* {modalContent} */}
        {isPosting && (
            <Modal onClose={onStopPosting} >
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} 
                />
            </Modal>
        )}
        
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody}/>
            <Post author="Kenji" body="Let's go for a long run!"/>
        </ul>
    </>
    );
}

export default PostsList;