import classes from './Post.module.css';

function Post(props) {
    // access attributes from props object
    // props.author or props.body
    return <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>
}

export default Post;