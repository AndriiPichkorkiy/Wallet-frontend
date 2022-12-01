import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "redux/selectors";

const PublicRoute  = () => {
    const isLogin = useSelector(isAuth);
    if(isLogin){
        return <Navigate to="/home"/>
    }
    return <Outlet/>
}

export default PublicRoute ;