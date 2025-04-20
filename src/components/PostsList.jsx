import Post from './Post';
import classes from './PostsList.module.css';
import {useLoaderData} from 'react-router-dom'; // hook

// If you have state that's manipulated in component A, but needed in component B, 
// you should LIFT the state UP to a component that has access to both components that need the state.
// In this case, it's the PostsList component that needs the state to pass it to Post as a value for the body prop
// and it's also the PostsList component that has access to the NewPost component which is
// the place where the state should be manipulated

function PostsList() {
    // Use useLoaderData hook from react-router-dom
    const posts = useLoaderData();
    // If we use the line below it would cause infinite loop as component function would be called again and again
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {setPosts(data.posts);});
    // To solve it we must use useEffect() hook to avoid infinite loop

    // Register states
    // const [posts, setPosts] = useState([]); // pass empty posts array as initial value

    // loading => in case backend data has delay we want to show that the data is loading
    // const [isFetching, setIsFetching] = useState(false);

    // useEffect(() =>{
    //     async function fetchPosts() {
    //         setIsFetching(true);
    //         // const response = await fetch('http://localhost:8080/posts');
    //         // const resData = await response.json();
    //         setPosts(resData.posts);
    //         setIsFetching(false);
    //     } 

    //     fetchPosts();       
    // }, []);

    // empty dependencies [] make sure that this function is executed only once when this component is first rendered

    // function addPostHandler(postData) {
    //     // Use dummy backend
    //     // fetch('http://localhost:8080/posts', {
    //     //     method: 'POST',
    //     //     body: JSON.stringify(postData),
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // }); // can be used to send HTTP requests (both fetch and send) 
    //     // http://localhost:8080 => because the backend runs locally on our machine and 8080 is used port

    //     //setPosts([postData, ...posts]); // ...posts => to spread our existing posts into this new array of posts - will work, but
    //     // Here is a better way of updating your state IF it depends on the previous state snapshot
    //     setPosts((existingPosts) => [postData, ...existingPosts]); 

    //     // The reason for above => internally React does actually NOT execute your state updating functions instantly 
    //     // At least it's not guaranteed that it will do so. But it schedules those stateupdates and 
    //     // In case you have multiple state updates after each other, you could potentially update your state based on some old state.
    //     // This is the way to make sure that React ensures that you get the latest correct state for this state update
    //     // Even if you have multiple pending state updates
    // }

    return (
    <>
        {posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.body} author={post.author} body={post.body}/> 
                ))}
            </ul>
        )}
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}     
        {/* {isFetching && 
        <div style={{textAlign: 'center', color: 'white'}}>
            <p>Loading posts...</p>
        </div>       
        }   */}
    </>
    );
}

export default PostsList;