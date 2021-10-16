import React from "react";
import Navigation from "../../components/Navigation";
import style from "./Leaderboard.css";
import Table from "react-bootstrap/Table";
import TableRow from "../../components/leaderboard/TableRow";
import Container from "react-bootstrap/Container";
import Footer from "../../components/footer";
import ScrollButton from "../../components/ScrollButton";

const Leaderboard = () => {
  return (
    <>
      <Navigation />
      <div style={style}>
        <div className='space bg-custom'></div>
        <div className='title mb-5 p-3'>LEADERBOARD</div>

        <Container>
          <div className='tablee'>
            <Table responsive borderless striped hover>
              <thead>
                <tr className='mt-5'>
                  <th>Position</th>
                  <th>GitHub Handle</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 12 }).map((_, index) => (
                  <TableRow
                    key={index}
                    position={index + 1}
                    handle={"akr-25"}
                    dp={"https://avatars.githubusercontent.com/u/79211216?v=4"}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
        <div className='space'></div>
      </div>
      <Footer bg='#12263F' />
      {/* <ScrollButton /> */}
    </>
  );
};

export default Leaderboard;
