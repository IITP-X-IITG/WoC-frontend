import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import "./Counter_up.css";
export default function Counter_up(props) {
  let check = 1;
  return (
    <div style={{ color: "white", zIndex: "2", position: "relative" }}>
      <div className="content" />
      <InView rootMargin="0px 0px 5px 0px">
        {({ inView, ref, entry }) => (
          <div className="count_up" ref={ref}>
            {inView && check ? (
              <CountUp duration={1} end={props.end} suffix={" +"}>
                {" "}
                {(check = 0)}
              </CountUp>
            ) : (
              <div>{props.end} +</div>
            )}
          </div>
        )}
      </InView>
    </div>
  );
}
