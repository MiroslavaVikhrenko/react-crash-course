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

    return (
    <>
    {/* {modalContent} */}
        {isPosting && (
            <Modal onClose={onStopPosting} >
                <NewPost 
                    onCancel={onStopPosting}
                />
            </Modal>
        )}
        
        <ul className={classes.posts}>
            <Post author="Kenji" body="Let's go for a long run!"/>
        </ul>
    </>
    );
}

export default PostsList;