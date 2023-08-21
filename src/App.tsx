import { Header } from "./components";
import { ROUTER } from "./constants/router.constant";
import DuoRequestPage from "./pages/duo-requestpage";
import LandingPage from "./pages/landingpage";
import UserPage from "./pages/userpage";
import SchoolRank from "./pages/schoolRankPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTER.HOME} element={<LandingPage />} />
      <Route path={ROUTER.USER} element={<UserPage />} />
      <Route path={ROUTER.DUO_REQUEST} element={<DuoRequestPage />} />
      <Route path={ROUTER.SCHOOL_RANK} element={<SchoolRank />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  return (
    <>
      <Header />
      <Router />
    </>
  );
};

export default App;
