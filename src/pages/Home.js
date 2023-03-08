import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "35em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            src="https://cdn.shopify.com/s/files/1/0688/1755/1382/files/DALL_E_2023-02-03_11.19.22_-_basketball_gym_5_1.png?v=1675445658&width=1500"
            alt=""
          />
        </div>
        <div
          style={{
            padding: "4rem 3.5rem",
            position: "relative",
            height: "fitContent",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "5rem",
              fontFamily: "Climate Crisis, cursive",
            }}
          >
            The Peak Collection
          </h1>
          <p style={{ color: "white", fontFamily: "Climate Crisis" }}>
            Push Your Performance with our athletic wear
          </p>
          <NavLink
            to="/store"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Climate Crisis",
            }}
          >
            Shop Now
          </NavLink>
        </div>
      </div>
      <div>
        <p
          style={{
            color: "white",
            fontFamily: "Climate Crisis, cursive",
            fontSize: "3rem",

            textAlign: "justify",
          }}
        >
          The Brand Shop combines comfort, style, and sustainability. Our
          products are made from organic cotton and crafted in India.
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "Climate Crisis, cursive",
            fontSize: "3rem",
            textAlign: "justify",
          }}
        >
          Each product features a minimalist aesthetic, with clean lines and
          neutral colors.
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "Climate Crisis, cursive",
            fontSize: "3rem",
            textAlign: "justify",
          }}
        >
          Join the movement today and elevate your style.
        </p>
      </div>
    </>
  );
};

export default About;
