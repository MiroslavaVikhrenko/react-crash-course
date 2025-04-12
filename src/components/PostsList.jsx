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
    const [posts, setPosts] = useState([]); // pass empty posts array as initial value

    function addPostHandler(postData) {
        //setPosts([postData, ...posts]); // ...posts => to spread our existing posts into this new array of posts - will work, but
        // Here is a better way of updating your state IF it depends on the previous state snapshot
        setPosts((existingPosts) => [postData, ...existingPosts]); 

        // The reason for above => internally React does actually NOT execute your state updating functions instantly 
        // At least it's not guaranteed that it will do so. But it schedules those stateupdates and 
        // In case you have multiple state updates after each other, you could potentially update your state based on some old state.
        // This is the way to make sure that React ensures that you get the latest correct state for this state update
        // Even if you have multiple pending state updates
    }

    return (
    <>
    {/* {modalContent} */}
        {isPosting && (
            <Modal onClose={onStopPosting} >
                <NewPost 
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
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