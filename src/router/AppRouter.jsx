import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth";
import { HeroesRoute } from "../heroes/";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPages />
            </PublicRouter>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoute />
            </PrivateRouter>
          }
        />
        <Route path="/*" element={<HeroesRoute />} />
      </Routes>
    </>
  );
};

export default AppRouter;
