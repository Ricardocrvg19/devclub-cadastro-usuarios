import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ListUsers from "./pages/UsersList"

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/list-User",
        element: <ListUsers />
    }

])

export default router