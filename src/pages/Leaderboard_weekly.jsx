import React from "react";
import Animatedbg from "../components/Animatedbg";
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Weekly from "./leaderboard/weekly";
import "bootstrap/dist/css/bootstrap.min.css";

function LeaderboardMain() {
    return (
        <>
            <Animatedbg />
            <Navigation />
            <Weekly />
            <Footer />
        </>
    );
}
export default LeaderboardMain;
