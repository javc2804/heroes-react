import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? <Navigate to={"/"}></Navigate> : children;
};

export default PublicRouter;
