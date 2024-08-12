import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//css
import './index.css'

// páginas 
import HomePage from './routes/HomePage/HomePage.jsx'
import NewPost from './routes/NewPost/NewPost.jsx'
import PostComponent from './routes/PostComponent/PostComponent.jsx'
import Adm from './routes/Adm/Adm.jsx'
import EditPost from './routes/EditPost/EditPost.jsx'

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
      {
        path:"/admin",
        element: <Adm/>
      },
      //criando rota dinamica pelo id
      {
        path:"/posts/:id",
        element : <PostComponent/>
      },
      //rota de edição
      {
        path:"/posts/edit/:id",
        element : <EditPost/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
