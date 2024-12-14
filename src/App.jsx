import Home from './views/Home';
import About from './views/About';
import Profiles from './views/Profiles';
import NotFound from './views/NotFound';
import Post from './views/Post';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './App.css'

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/posts',
      element: <Profiles />
    },
    {
      path: '/posts/:id',
      element: <Post />
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
