import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../components/Home/Home';
import Sign from '../components/Sign';

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
    },
    {
        path: '/register',
        element: <Sign/>
    }
]);

export default Router;