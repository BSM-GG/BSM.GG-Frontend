import { Header } from "./components";
import { ROUTER } from "./constants/router.constant";
import DuoRequestPage from "./pages/duo-requestpage";
import LandingPage from "./pages/Landingpage";
import UserPage from "./pages/Userpage";
import SchoolRank from "./pages/SchoolRankPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MostPlayer from "./pages/most-player";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={ROUTER.HOME} element={<LandingPage />} />
      <Route path={ROUTER.USER} element={<UserPage />} />
      <Route path={ROUTER.DUO_REQUEST} element={<DuoRequestPage />} />
      <Route path={ROUTER.SCHOOL_RANK} element={<SchoolRank />} />
      <Route path={ROUTER.LOL_CAHNG} element={<MostPlayer />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  return <Router />;
};

export default App;
