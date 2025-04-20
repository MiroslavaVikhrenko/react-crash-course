import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Posts, {loader as postsLoader} from './routes/Posts'
import './index.css'
import RootLayout from './routes/RootLayout';
import NewPost, {action as newPostAction} from './routes/NewPost';

// Create a route configuration object for 'router' prop
// createBrowserRouter() function takes an array which is a list of route definitions.
// A route definition is an object
const router = createBrowserRouter([
  // layout route which wraps all routes no matter which path they have
  {
    path: '/', 
    element: <RootLayout />, 
    children:[ // nested routes:
       // <our-domain>
      {
        path: '/', 
        element: <Posts />, 
        loader: postsLoader,
        children:[
          {path: '/create-post', element: <NewPost />, action: newPostAction}, // <our-domain>/create-post
      ]},
      
    ]
  },  
]);

// <RouterProvider /> enables Routing and tells React Router that it should watch the URL 
// and start rendering different components for different paths.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
