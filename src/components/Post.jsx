const names = ['Yumi', 'Kenji'];

function Post() {
    // Standard JS code to pick a random name for dynamic values 
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return <div>
        <p>{chosenName}</p>
        <p>React.js is awesome!</p>
    </div>
}

export default Post;