import { Header } from "./components";
import { ROUTER } from "./constants/router.constant";
import DuoRequestPage from "./pages/duo-requestpage";
import LandingPage from "./pages/landingpage";
import UserPage from "./pages/userpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTER.HOME} element={<LandingPage />} />
      <Route path={ROUTER.USER} element={<UserPage />} />
      <Route path={ROUTER.DUO_REQUEST} element={<DuoRequestPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
