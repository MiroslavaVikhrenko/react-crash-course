import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './App'
import './index.css'
import NewPost from './components/NewPost';

// Create a route configuration object for 'router' prop
// createBrowserRouter() function takes an array which is a list of route definitions.
// A route definition is an object
const router = createBrowserRouter([
  {path: '/', element: <App />}, // <our-domain>
  {path: '/create-post', element: <NewPost />}, 
]);

// <RouterProvider /> enables Routing and tells React Router that it should watch the URL 
// and start rendering different components for different paths.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
