import {
    useLocation,
    Navigate,
  } from "react-router-dom";
import { useReactContext } from "../../libs/context";

function RequireAuth({ context, children }) {
    let auth = useReactContext(context);
    let location = useLocation();
    console.log(auth, context)
    if (auth.user === null) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth
