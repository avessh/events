import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import NotApprovedEvents from './Components/NotApproved/NotApprovedEvents'

// import {createBrowserRouter , createRoutesFromElements , Route} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './Components/Navbar/Navbar.css'
import './Components/Home/Home.css'
import './Components/CreateEvent/CreateEvent.css'
import Edit from './Components/editEvents/Edit';
import ApprovedEvents from './Components/ApprovedEvents/ApprovedEvents';


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
    },
    {
      path:'/approvedEvents',
      element:<ApprovedEvents/>
    },
    {
      path:'notapprovedevents',
      element: <NotApprovedEvents/>
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
