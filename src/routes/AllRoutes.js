import { Route, Routes } from "react-router-dom";
import { Home, Cartpage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </>
  );
};
