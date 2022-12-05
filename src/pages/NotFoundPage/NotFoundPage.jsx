import React from "react";
import { Link } from "react-router-dom";
import DashbordBtns from "../../components/DashbordBtns/DashbordBtns";

function NotFoundPage() {
    return (
        <div>
            <DashbordBtns />
            <h2>Page not found</h2>
            <Link to="/cabinet">We are waiting for connection</Link>
        </div>
    )

}

export default NotFoundPage;