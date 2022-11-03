import React, { useMemo, useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import style from "../leaderboard/Leaderboard.css";
import Container from "react-bootstrap/Container";
import Footer from "../../components/footer";

import Loading from "../../components/leaderboard/Loading";

const Points = (props) => {
    const [loading, setLoading] = useState(true);
    const [incorrectId, setIncorrectId] = useState(true);
    const [totalPoints, setTotal] = useState(0);
    const [points, setPoints] = useState([]);
    const [categories, setCategories] = useState([]);
    const [links, setLinks] = useState([]);

    useEffect(() => {

    async function getCSV() {
      try{
        const target = `https://docs.google.com/spreadsheets/d/1dqrF2ixN21yvUjPs6ZL5btvNP0V8q1v9vX4RjFKFEX4/export?format=csv`;
        const result = await fetch(target);
        const data = await result.text();
        var rows = data.toString().split("\r");
        for(let i = 0; i < rows.length ; i++){
            const args = rows[i].split(',');
            if (args[0] == props.id) {
                setTotal(args[1]);
                setIncorrectId(false);
                let tempPoints = [];
                let tempCate = [];
                let tempLink = [];
                for (let j = 2; j < args.length; j += 2) {
                    if (j+1 == args.length) break;

                    if (args[j] == '' || args[j+1] == '') {
                        continue;
                    }

                    tempPoints.push(args[j]);
                    tempLink.push(args[j+1]);
                    if (args[j+1].includes("pull")) {
                        tempCate.push("pull");
                    } else {
                        tempCate.push("issue");
                    }
                }
                setPoints(tempPoints);
                setCategories(tempCate);
                setLinks(tempLink);
            }
        }
        setLoading(false);
      }catch(error){

        console.log(error);

      }
    }

    getCSV();

  },[]);

  const entries = [];
  for (let i = 0; i < points.length; i++) {
    entries.push(<div className="title" key={i}>{ points[i] + ((categories[i] == 'pull') ? ' (PR): ' : " (Issue): ") + links[i] }</div>)
  }

  return (
    <>
      <Navigation />
      <div class='leader-stars'></div>
      <div class='leader-twinkling'></div>
      <div style={style} >
        <div className='space'></div>
        <div className='title mb-5 p-3'>{props.id}</div>
        <div className='title mb-5 p-3'>{"Total: " + totalPoints}</div>
        {loading ? <Loading/>: (

        <Container>
            {incorrectId ? <p>{"Wrong ID"}</p> : <ul>
                    {entries}
                </ul>}
        </Container>
         )}
        <div className='space'></div>
        <Footer bg='#12263F' />
      </div>
      {/* <ScrollButton /> */}
    </>
  );
};

export default Points;
