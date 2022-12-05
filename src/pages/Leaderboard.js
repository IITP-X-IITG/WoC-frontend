import React from "react";
import Animatedbg from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Leaderboard from "./Leaderboard/Leaderboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function LeaderboardMain() {
  return (
    <>
      <Animatedbg />
      <Navigation />
      <Leaderboard />
      <Footer />
    </>
  );
}
export default LeaderboardMain;
