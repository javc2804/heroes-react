import { Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth";
import { HeroesRoute } from "../heroes/";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPages />} />
        <Route path="/*" element={<HeroesRoute />} />
      </Routes>
    </>
  );
};

export default AppRouter;
