import { Navigate, Route, Routes } from "react-router-dom";
import { DcPages, MarvelPage, HeroPages, SearchPages } from "..";
import { Navbar } from "../../ui";

export const HeroesRoute = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="hero/:id" element={<HeroPages />} />
          <Route path="search" element={<SearchPages />} />
          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoute;
