import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
    return (
    <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Yumi" body="It's a great weather for running."/>
            <Post author="Kenji" body="Let's go for a long run!"/>
        </ul>
    </>
    );
}

export default PostsList;