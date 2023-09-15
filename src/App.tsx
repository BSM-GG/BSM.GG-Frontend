import Header from "components/Header";
import { ROUTER } from "constants/router.constant";
import DuoRequestPage from "pages/duo-requestpage";
import LandingPage from "pages/landingpage";
import UserPage from "pages/userpage";
import SchoolRank from "pages/schoolRankPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MostPlayer from "pages/most-player";

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
