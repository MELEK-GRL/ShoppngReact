import AllFoods from './page/AllFoods'
import Cart from './page/Cart'
import Checkout from './page/Checkout'
import Contact from './page/Contact'
import FoodDetails from './page/FoodDetails'
import HomeLayout from './page/Home'
import Home from './page/Home/Home'
import Login from './page/Login'
import Register from './page/Register'



const routes=[
    {
        display:'Home',
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                display:'AllFoods',
                path:'/foods',
                element:<AllFoods/>
            },
            {
                display:'FoodDetails',
                path:'foods/:id',
                element:<FoodDetails/>
            },
            {
                display:'Cart',
                path:'cart',
                element:<Cart/>
            },
            {
                path:'checkout',
                element:<Checkout/>
            },
            {
                display:'Login',
                path:'login',
                element:<Login/>
            },
            {
                display:'Register',
                path:'register',
                element:<Register/>
            },
            // {
            //     display:'Contact',
            //     path:'contact',
            //     element:<Contact/>
            // },
        ]
    }
]

export default routes