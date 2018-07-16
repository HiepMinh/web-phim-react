import Home from "./../Pages/HomePage/Home";
import Admin from "./../Pages/AdminPage/Admin";
import NotFound from "./../Pages/NotFoundPage/NotFound";
import MovieDetail from "../Pages/HomePage/MovieDetail";

const indexRouter = [
    {
        path : "/",
        component : Home,
        exact : true
    },
    {
        path : "/admin",
        component : Admin,
        exact : false
    },
    {
        path : "/moviedetail/tenphim=:tenphim&maphim=:id",
        component : MovieDetail,
        exact : false
    },
    {
        path : "",
        component : NotFound,
        exact : false
    }
]

export default indexRouter;




