import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import style from "./Points.css";
import Container from "react-bootstrap/Container";
import Footer from "../../components/footer";
import BTable from "react-bootstrap/Table";
import Loading from "../../components/leaderboard/Loading";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const Points = (props) => {
  const [loading, setLoading] = useState(true);
  const [rank, setRank] = useState(0);
  const [totalPoints, setTotal] = useState(0);
  const [prs, setPrs] = useState([]);

  useEffect(() => {
    const typeOfLink = (link) => {
      for (let i = link.length - 1; i >= 0; i--) {
        if (link[i] === "/" && link[i - 1] === "s") {
          return "Issue";
        }
        if (link[i] === "/" && link[i - 1] === "l") {
          return "Pull Request";
        }
      }
      return "#";
    };

    const nameOfLink = (link) => {
      let n = "";
      for (let i = link.length - 1; i >= 0; i--) {
        if (link[i] === "/") break;
        else {
          n = link[i] + n;
        }
      }
      let r;
      for (let i = link.length - 1; i >= 0; i--) {
        if (
          (link[i] === "p" && link[i - 1] === "/") ||
          (link[i] === "i" && link[i - 1] === "/")
        ) {
          r = i;
          break;
        }
      }
      let str = "";
      for (let i = 19; i < r - 1; i++) {
        str += link[i];
      }
      str = str + "#" + n;
      return str;
    };

    const getCSV = async () => {
      try {
        const target = `https://docs.google.com/spreadsheets/d/1j7mCwOWP3hSlKPfHKy0BvNZljSgJoqnUqTgjILqYFgU/export?format=csv`;
        const result = await fetch(target);
        const data = await result.text();
        var rows = data.toString().split("\r");
        let arr = [];
        for (let i = 0; i < rows.length; i++) {
          let str = "";
          let temp = [];
          if (i === 0) {
            for (let j = 0; j < rows[i].length; j++) {
              str += rows[i][j];
            }
            temp = str.split(",");
          } else {
            let str = "";
            for (let j = 1; j < rows[i].length; j++) {
              str += rows[i][j];
            }
            temp = str.split(",");
          }
          let x = temp[1];
          temp[1] = temp[0];
          temp[0] = Number(x);
          arr.push(temp);
        }

        arr.sort(function (a, b) {
          return a[0] - b[0];
        });

        let prList = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          if (arr[i][1] === props.id) {
            setTotal(arr[i][0]);
            setRank(arr.length - i);
            let datapr = {};
            for (let j = 2; j < arr[i].length; j++) {
              if (j % 2 === 0) {
                datapr["points"] = arr[i][j];
              } else {
                datapr["link"] = arr[i][j];
                datapr["text"] = nameOfLink(arr[i][j]);
                datapr["type"] = typeOfLink(arr[i][j]);
                if(datapr["type"] != "#" && datapr["text"] != "#"){
                  prList.push(datapr);
                }
                datapr = {};
              }
            }
          }
        }
        setPrs(prList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCSV();
  }, [props.id]);

  return (
    <>
      <Navigation />
      <div className="leader-stars"></div>
      <div className="leader-twinkling"></div>
      <div className="space"></div>
      {loading ? (
        <>
          <div className="space"></div>
          <Loading />
          <div className="space"></div>
        </>
      ) : (
        <Container>
          <div style={style}>
            <div className="inf">
              <div className="rank">
                <div className="rank_text">RANK</div>
                <div className="rank_num">{<p>{rank}</p>}</div>
              </div>
              <Image src={"https://github.com/" + props.id + ".png"} />
              <div className="name">
                <IdText>
                  <a
                    href={"https://github.com/" + props.id}
                    style={{ textDecoration: "none", color: "white" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.id}
                  </a>
                </IdText>
              </div>
              <div className="score">
                <TotalPoints>{"Points : " + totalPoints}</TotalPoints>
              </div>
            </div>
            <div className="tablee">
              <BTable responsive borderless hover>
                <thead>
                  <th className="left">Points</th>
                  <th className="middle">Type</th>
                  <th className="rig">Link</th>
                </thead>
                <tbody>
                  {prs.map((data) => {
                    return (
                      <tr>
                        <td className="left">{data.points}</td>
                        <td className="middle">{data.type}</td>
                        <td className="rig">
                          <SLink href={data.link}>{data.text}</SLink>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </BTable>
            </div>
          </div>
          <div className="space"></div>
        </Container>
      )}
      <Footer bg="#12263F" />
    </>
  );
};

export default Points;

const Image = styled(Avatar)`
  margin: auto;
  margin-left: 2rem;
  margin-right: 1.2rem;
  transform: scale(1.3);
`;

const IdText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const TotalPoints = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  background: white;
  color: black;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  filter: drop-shadow(1px 1px 1px #1e1e1e);
`;

const SLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: None;
  color: #1e1e1e;
  &:hover {
    color: #838383;
  }
`;
