import { createBrowserRouter } from "react-router-dom";
import SignUpLayout from "../layout/SignUpLayout";
import Login from "./Login";
import SignUpConfirm from "./SignUpConfirm";
import SignUpFinalPage from "./SignUpFinalPage";
import SignUpFirstPage from "./SignUpFirstPage";
import SignUpSecondPage from "./SignUpSecondPage";
import EmployeeDeatils from "./EmployeeDetials";
import PrivateRoute from "./PrivateRoute";
import DisplayError from "./DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUpLayout></SignUpLayout>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <SignUpFirstPage></SignUpFirstPage>
            },
            {
                path: '/home',
                element: <SignUpFirstPage></SignUpFirstPage>
            },
            {
                path: '/signUpSecondPage',
                element: <SignUpSecondPage></SignUpSecondPage>
            },
            {
                path: '/signUpFinalPage',
                element: <SignUpFinalPage></SignUpFinalPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUpConfirm',
                element: <SignUpConfirm></SignUpConfirm>
            }
        ]
    },
    {
        path: '/employee',
        element: <PrivateRoute><EmployeeDeatils></EmployeeDeatils></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>
    }
])