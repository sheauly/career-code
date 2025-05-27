import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayOut,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'login',
                Component: Login,
            }
        ]
    },

]);
export default router;