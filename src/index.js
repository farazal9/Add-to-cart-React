import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './Components/auth/Signin/Signin';
import Signup from './Components/auth/Signin/Signup/Signup';
import Error from './Components/error-page/Error';
import ProductDetails from './Components/Product-details/ProductDetails';
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux'
import { store } from './Store';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
{
    path:"/",
    element:<Layout />,
    children:[

        {
path:"",
element:<App/>
        },
        {
            path:"product-details/:product_id",
            element: <ProductDetails/>
            },
            
    ],
    errorElement: <Error/>
},


{
    path:"/sign-in",
    element:< Signin/>
},
{
    path:"/sign-up",
    element:<Signup/>
},



]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
<RouterProvider router={router} />

    </Provider>


);


