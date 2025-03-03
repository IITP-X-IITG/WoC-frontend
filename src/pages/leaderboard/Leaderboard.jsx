import React, { useState, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import BTable from "react-bootstrap/Table";
import { usePagination, useTable } from "react-table";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Navigation from "../../components/Navigation";
import Loading from "../../components/leaderboard/Loading";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch("/api/transactions/leaderboard", {
          method: "GET",
        });
        const result = await response.json();
        
        if (result.message === "Leaderboard fetched successfully") {
          // Process data and add rank
          const processedData = result.data
            .sort((a, b) => b.points - a.points) // Sort by points in descending order
            .map((item, index) => ({
              rank: index + 1,
              gitid: item.student.split("/")[3],
              points: item.points.toFixed(2),
              lastUpdated: new Date(item.lastUpdated).toLocaleDateString()
            }));
          
          setLeaderboardData(processedData);
          setFilteredData(processedData);
          setLoading(false);
        } else {
          console.error("Failed to fetch leaderboard data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      }
    }
    
    fetchLeaderboard();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Position",
        accessor: "rank",
      },
      {
        Header: "GitHub Handle",
        accessor: "gitid",
      },
      {
        Header: "Score",
        accessor: "points",
      },
    ],
    []
  );

  const SearchHandler = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = leaderboardData.filter((user) => 
      user.gitid.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const tableInstance = useTable(
    { 
      columns, 
      data: filteredData,
      initialState: { pageIndex: 0, pageSize: 10 } 
    },
    usePagination
  );

  const {
    getTableBodyProps,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    setPageSize,
    gotoPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    <>
      <Navigation />
      <div className="leader-stars"></div>
      <div className="leader-twinkling"></div>
      <div>
        <div className="space"></div>
        <div className="title mb-5 p-3">LEADERBOARD 2025</div>

        {loading ? (
          <Loading />
        ) : (
          <Container>
            <input
              type="search"
              name="searchBar"
              id="searchBar"
              placeholder="Search for Participants"
              onChange={(e) => SearchHandler(e)}
            />

            <div className="tablee">
              <BTable responsive borderless hover>
                <thead>
                  <tr style={{width: "100%"}}>
                    <th className="left-position">Position</th>
                    <th className="middle-id">Github ID</th>
                    <th className="right-score">Score</th>
                  </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={i}>
                        {row.cells.map((cell, index) => {
                          if (cell.column.id === "gitid")
                            return (
                              <td
                                className="middle-id"
                                {...cell.getCellProps()}
                                key={index}
                              >
                                <Image
                                  alt={cell.value}
                                  src={
                                    "https://github.com/" +
                                    cell.value +
                                    ".png"
                                  }
                                />
                                <SLink to={"/points/" + cell.value}>
                                  {cell.value}
                                </SLink>
                              </td>
                            );
                          else if (cell.column.id === "rank")
                            return (
                              <td
                                className="left-position"
                                {...cell.getCellProps()}
                                key={index}
                              >
                                {cell.value === 1 && <Gold>1</Gold>}
                                {cell.value === 2 && <Silver>2</Silver>}
                                {cell.value === 3 && <Bronze>3</Bronze>}
                                {cell.value !== 1 &&
                                  cell.value !== 2 &&
                                  cell.value !== 3 && (
                                    <Text>{cell.value}</Text>
                                  )}
                              </td>
                            );
                          else
                            return (
                              <td
                                className="right-score"
                                {...cell.getCellProps()}
                                key={index}
                              >
                                <Text>{cell.value}</Text>
                              </td>
                            );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </BTable>
              
              <div className="pagination">
                <div className="pagination-left">
                  <span id="pageof">
                    Page{" "}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                  </span>
                  <div className="btn-grp">
                    <button
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      {"First"}
                    </button>{" "}
                    <button
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      {"Previous"}
                    </button>{" "}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                      {"Next"}
                    </button>{" "}
                    <button
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                    >
                      {"Last"}
                    </button>{" "}
                  </div>
                </div>
                <div className="pagination-right">
                  <div className="input-group">
                    <span className="input-group-text">Go to Page: </span>
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                      defaultValue={pageIndex + 1}
                      onChange={(e) => {
                        const page = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        gotoPage(page);
                      }}
                      style={{ width: "100px" }}
                    />
                  </div>

                  <Dropdown>
                    <Dropdown.Toggle
                      style={{
                        backgroundColor: "#cce7ff",
                        marginLeft: "1em",
                        color: "#2e63a5",
                        borderColor: "#fff",
                      }}
                      id="dropdown-basic"
                    >
                      Items per page
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {[5, 10, 15, 20, 25].map((pageSize) => (
                        <Dropdown.Item
                          key={pageSize}
                          value={pageSize}
                          onClick={() => {
                            setPageSize(pageSize);
                          }}
                        >
                          Show {pageSize}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Container>
        )}
        <div className="space"></div>
      </div>
    </>
  );
};

export default Leaderboard;

// Styled Components
const Image = styled(Avatar)`
  margin: 2px 0px;
  margin-left: 15px;
  margin-right: 1rem;
`;

const SLink = styled(NavLink)`
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Gold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffd700;
  border-radius: 50%;
  margin: auto;
  width: 25px;
  height: 25px;
  padding: 0.7rem;
`;

const Silver = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #c0c0c0;
  border-radius: 50%;
  margin: auto;
  width: 25px;
  height: 25px;
  padding: 0.7rem;
`;

const Bronze = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #cd7f32;
  border-radius: 50%;
  margin: auto;
  width: 25px;
  height: 25px;
  padding: 0.7rem;
`;