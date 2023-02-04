/* eslint-disable max-len */
/* eslint-disable-next-line */
import React from "react";
import styled from "styled-components";

import { About, Connect, Work } from "./components/index";
import { Landing } from "../../shared";


const Home = () => {

  return (
    <>
      <Landing type="home">
        <h1>Kyle Kearney</h1>
        <h6 className="sub-header rotate-1">ui engineer</h6>
      </Landing>
      <About/>
      <Work>
        <ul>
          <li>
            <a
              href="https://frenchsquirrel.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <span className="left-big">French Squirrel</span>
            </a>
          </li>
          <li>
            <a
              href="https://boosterapps.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <span className="left-big">Booster Apps</span>
            </a>
          </li>
          <li>
            <a
              href="http://barnhousetap.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <span className="left-big">Barn House Tap</span>
            </a>
          </li>
          <li>
            <a
              href="http://jonesbodywork.com"
              target="_blank"
              rel="norefferer noopener"
            >
              <span className="left-big">Jones Bodywork</span>
            </a>
          </li>
        </ul>
      </Work>
      {/* <Connect /> */}
    </>
  );
};

export default Home;
