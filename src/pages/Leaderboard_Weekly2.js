import React from "react";
import Animatedbg from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Weeklysec from "./leaderboard/weekly2";
import "bootstrap/dist/css/bootstrap.min.css";

function LeaderboardMain() {
    return (
        <>
            <Animatedbg />
            <Navigation />
            <Weeklysec />
            <Footer />
        </>
    );
}
export default LeaderboardMain;
