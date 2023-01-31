import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {quotes,getAuthorQuotes} from './helpers/quotes';
import AuthorPage from './pages/AuthorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "true",
        element: <Home />,
        loader: quotes
      },
      {
        path: ":id",
        element: <AuthorPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
