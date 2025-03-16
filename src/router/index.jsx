import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Lab02a from "../pages/Lab02";
import RecipeBox from "../pages/RecipeBox";
import UseRedecer from "../UseRedecer";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
           { 
            path:"/lab02a",
            element: <Lab02a></Lab02a>
            },
            {
                path:"/your-recipe-box",
                element: <RecipeBox/>
            },{
                path:"/useReducer",
                element: <UseRedecer></UseRedecer>
            },{
                path: "/search",
                element: <SearchPage></SearchPage>
            }
        ]
    }
])

export default router;