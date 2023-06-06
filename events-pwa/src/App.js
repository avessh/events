import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import CreateEvent from './Components/CreateEvent/CreateEvent';

// import {createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './Components/Navbar/Navbar.css'
import './Components/Home/Home.css'
import './Components/CreateEvent/CreateEvent.css'
import Edit from './Components/editEvents/Edit';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: '/create',
      element: <CreateEvent/>
    },
    {
      path:'/editEvents',
      element:<Edit/>
    }
  ]);
  
  return (
    <>
    <RouterProvider router={router} />
    <Navbar/>
    </>
  );
}

export default App;
