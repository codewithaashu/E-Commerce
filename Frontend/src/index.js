import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import CategoryProduct from './Components/CategoryProduct';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Register from './Components/Register';
import Wishlist from './Components/Wishlist';
import AddToBag from './Components/AddToBag';
import SearchProduct from './Components/SearchProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/categories/:category",
    element: <CategoryProduct/>,
    errorElement: <Error />
  },
  {
    path:"/products/:id",
    element:<ProductDetails/>
  },
  {
    path:"/search",
    element:<SearchProduct/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/wishlist",
    element:<Wishlist/>
  },
  {
    path:"/addtobag",
    element:<AddToBag/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
