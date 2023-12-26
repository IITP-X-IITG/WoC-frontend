import React from "react";
import Animatedbg from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import WeeklyThird from "./leaderboard/weekly3";
import "bootstrap/dist/css/bootstrap.min.css";

function LeaderboardMain() {
    return (
        <>
            <Animatedbg />
            <Navigation />
            <WeeklyThird />
            <Footer />
        </>
    );
}
export default LeaderboardMain;
