function Post(props) {
    // access attributes from props object
    // props.author or props.body
    return <div>
        <p>{props.author}</p>
        <p>{props.body}</p>
    </div>
}

export default Post;