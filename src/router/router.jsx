import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";

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
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>
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