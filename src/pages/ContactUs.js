import React from "react";
import Photo from "./../components/assets/photo.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const ContactUs = () => {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            color: "#dee2e6",
            justifyContent: "center",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            Self-taught and highly motivated individual seeking a Front-End Web
            Developer role. Strong foundation in HTML, CSS, JavaScript, and
            React, with a keen eye for design and user experience. Seeking to
            leverage my creativity and passion for web development to create
            visually stunning, user-friendly websites and applications.
          </p>
          <Container style={{ fontSize: "5rem", margin: "0", padding: "0" }}>
            <span>Hi, I am Suriyaprakash</span>
          </Container>
        </Container>
        <Container>
          <Image src={Photo} alt="..." fluid style={{ borderRadius: "10%" }} />
        </Container>
      </Container>
    </>
  );
};

export default ContactUs;
