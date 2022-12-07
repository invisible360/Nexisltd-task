import { createBrowserRouter } from "react-router-dom";
import SignUpLayout from "../layout/SignUpLayout";
import AttendanceTable from "./AttendanceTable";
import Login from "./Login";
import SignUpFinalPage from "./SignUpFinalPage";
import SignUpFirstPage from "./SignUpFirstPage";
import SignUpSecondPage from "./SignUpSecondPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUpLayout></SignUpLayout>,
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
            }
        ]
    },
    {
        path: '/attendance',
        element: <AttendanceTable></AttendanceTable>
    }
])