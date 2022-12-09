import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "../../../redux/auth/userSlice";

const PublicRoute  = () => {
    const isLogin = useSelector(isAuth);
    if(isLogin){
        return <Navigate to="/cabinet"/>
    }
    return <Outlet/>
}

export default PublicRoute ;