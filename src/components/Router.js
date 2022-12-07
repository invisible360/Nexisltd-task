import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "./SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <SignUp></SignUp>
            },
            {
                path: '/home',
                element: <SignUp></SignUp>
            }
        ]
    }
])