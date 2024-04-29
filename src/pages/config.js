import TodoLayout from "../layouts/TodoLayout";
import Home from "./Home";
import Todo from "./Todo";
import HomeLayout from "../layouts/HomeLayout";

export const config = [
    {
        element: <Home />,
        path: '/',
        Layout: HomeLayout
    },
    {
        element: <Todo />,
        path: '/todo',
        Layout: TodoLayout
    }
]