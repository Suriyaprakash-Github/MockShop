import React, { useRef } from "react";
import Photo from "./../components/assets/photo.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
  const enteredName = useRef();
  const enteredEmail = useRef();
  const enteredPhone = useRef();
  const enteredDescription = useRef();

  const contactFormhandler = (e) => {
    e.preventDefault();

    const formDetails = {
      name: enteredName.current.value,
      email: enteredEmail.current.value,
      phone: enteredPhone.current.value,
      description: enteredDescription.current.value,
    };
    console.log(formDetails);

    fetch("https://ecomm-c1511-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
      <form
        onSubmit={contactFormhandler}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label style={{ color: "white" }} htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" ref={enteredName} required />

        <label style={{ color: "white" }} htmlFor="email">
          Email:{" "}
        </label>
        <input type="email" id="email" ref={enteredEmail} required />

        <label style={{ color: "white" }} htmlFor="phone">
          Phone Number
        </label>
        <input type="number" id="phone" ref={enteredPhone} />

        <label style={{ color: "white" }} htmlFor="description">
          Description
        </label>
        <input type="text" id="description" ref={enteredDescription} />

        <Button
          style={{ borderRadius: "4px", backgroundColor: "#343a40" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactUs;
