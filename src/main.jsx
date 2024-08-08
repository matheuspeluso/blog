import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//css
import './index.css'

// páginas 
import HomePage from './routes/HomePage/HomePage.jsx'
import NewPost from './routes/NewPost/NewPost.jsx'

// react-router-dom
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path:"/new",
        element: <NewPost/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
