//import {useState} from 'react';
import classes from './NewPost.module.css';

// "htmlFor" instead of "for" in jsx

function NewPost(props) {
  //const stateData = useState(''); // stateData is an array with always 2 elements 

  //stateData[0] // current state value (currently empty string but can be changed)
  //stateData[1] // state updating function => a function you can execute to assign a new value to your state
  // If you call that state updating function, you don't just store a new value somewhere in memory
  // but React will also re-execute that function in which this state was registered
  // So it will call this component function again, just as it did initially when it rendered that component for the 1st time
  // And since it calls that component function again, you get the current state value.
  // So the value which you just set with help of that state updating function as the 1st element here
  // And you get the latest JSX snapshot
  // And if that deviates from the previously rendered JSX snapshot, React will update the parts in the UI that need updating
  // React will basically make a comparison between the different snapshots behind the scenes 
  // and ONLY update the parts in the UI where that must be updated so that
  // you DON'T unnecessarily update the DOM, which is quite performance intensive

  // Use array destructuring and register a state
  // const [enteredBody, setEnteredBody] = useState();

  // function changeBodyHandler(event) {
  //   setEnteredBody(event.target.value); // pass a new value

  //   // it may be a const because it's always a brand new const 
  //   // because it's always a brand new function execution in the end when you update the state
  // }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;