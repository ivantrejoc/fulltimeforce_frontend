import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ element: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.isAuth);

  console.log("SESSION STATUS EN PRIVATE ROUTER: ", isAuth);

  return isAuth && isAuth.authenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/signin" replace />
  );
};
export default PrivateRouter;
