import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext.jsx";

export const ProtectedRoute = ({ children, accessBy }) => {
    const { token } = useContext(AuthContext);

    if (accessBy === "non-authenticated") {
        if (!token) {
            return children;
        }
    } else if (accessBy === "authenticated") {
        if (token) {
            return children;
        }
    }
    return <Navigate to="/"></Navigate>;
};

