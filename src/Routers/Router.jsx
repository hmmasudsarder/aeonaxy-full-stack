import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../components/Home/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children :[
            {
                index: true,
                element: <Home/>
            }
        ]
    }
]);

export default Router;