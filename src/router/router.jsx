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
import MyApplications from "../Pages/MyApplications";
import AddJobs from "../Pages/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";

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
                path: 'myApplications',
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            },
            {
                path: 'addJob',
                element: <PrivateRoute>
                    <AddJobs></AddJobs>
                </PrivateRoute>
            },
            {
                path:"/myPostedJobs",
                element: <PrivateRoute>
                    <MyPostedJobs></MyPostedJobs>
                </PrivateRoute>
            },
            {
                path:'/applications/:job_id',
                element: <PrivateRoute>
                    <ViewApplications></ViewApplications>
                </PrivateRoute>,
                loader: ({ params }) => {
                    console.log(params)
                    return fetch(`http://localhost:3000/applications/job/${params.job_id}`)
                }

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