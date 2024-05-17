import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const formElement = formRef.current;

    const formData = {
      user_name: "jose",
      user_email: "g04jose.garcia41@gmail.com",
      message: "hello world",
    };

    emailjs
      .sendForm(
        "service_u9ol5gh",
        "template_rcujfiq",
        formElement,
        "sGTrQsJcSxEU-WaP4",
        formData
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={formRef} onSubmit={sendEmail}>
        {/* Hide Name, Email, and Message inputs */}
        <div className="hidden">
          <label>Name</label>
          <input type="text" name="user_name" value="jose" readOnly />
          <label>Email</label>
          <input type="email" name="user_email" value="g04jose.garcia41@gmail.com" readOnly />
          <label>Message</label>
          <textarea name="message" value="hello world" readOnly></textarea>
        </div>
        {/* Display only the Send button */}
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// the div

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    label {
      margin-top: 1rem;
    }
    input,
    textarea {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    .hidden {
      display: none; /* Hide the div containing Name, Email, and Message inputs */
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
