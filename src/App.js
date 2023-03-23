import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leader-board" element={<LeaderBoard />} />
          <Route path="/new" element={<CreatePoll />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
