import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { isAuth } from "../../../redux/auth/auth-selectors";

const PrivateRoute = () => {
    const isLogin = useSelector(state => state.userV2.isLogin);
    if(!isLogin){
        return <Navigate to="/login" />
    }
    return <Outlet />
}

export default PrivateRoute;