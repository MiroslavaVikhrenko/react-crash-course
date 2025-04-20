import {useState} from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

// "htmlFor" instead of "for" in jsx

function NewPost({onCancel, onAddPost}) {
  // Register states   
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
      setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
      setEnteredAuthor(event.target.value);
  }

  // This is default submit event.
  // When a form is submitted, this submit event will be triggered and
  // the browser will automatically generate and send an HTTP request
  // We don't want it here => because sending an HTTP request to the server that's serving this React app would in the end
  // lead to the page being reloaded and we have NO server side code here that would handle that request.
  // React is a front end library running in the browser, NOT on the server. It CAN'T handle that request. => 
  // we will use preventDefault() method => this prevents the browser default of generating and sending an HTTP request
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    // Close the form
    onCancel();
  }

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

  // button type='submit' => default => not required

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;