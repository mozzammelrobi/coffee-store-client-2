import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import AddCoffee from "../components/AddCoffee"
import UpdateCoffee from "../components/UpdateCoffee"

export const router = createBrowserRouter([
    {
        path:'/',
        loader: () => fetch('http://localhost:5000/coffees'),
        element:<App></App>,
   
    },
    {
        path:'/addCoffe',
        element: <AddCoffee></AddCoffee>
    },
    {
        path:'/updateCoffee/:id',
        loader: ({params}) =>fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>
    }
])