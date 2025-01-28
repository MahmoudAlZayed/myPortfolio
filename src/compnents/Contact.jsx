// Hooks
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Components

// Style
import "../Styles/all.scss";

// Icons
import { IoIosSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";

//Images

export default function Contact() {
  const [input, setInput] = useState({ name: "", email: "", message: "" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ndlaiso", "template_zxlrmb4", form.current, {
        publicKey: "suQRaU9PPKukExmOt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          {
            sendEmail;
          }
        }}
      >
        <h2 id="contact">Contact Me</h2>
        <hr />
        <div className="city">
          <FaLocationDot className="locatioIcon" /> <p>Gothenborg, SE</p>
        </div>
        <div className="email">
          <SlEnvolope className="emailIcon" />{" "}
          <p>Email : websites.design47@gmail.com</p>
        </div>
        <p>Let&apos;s get in touch. Send me a message </p>
        <input
          id="name"
          type="text"
          name="user_name"
          required
          placeholder="Name"
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
        />
        <input
          id="email"
          type="email"
          name="user_email"
          required
          placeholder="Email"
          value={input.email}
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
          }}
        />
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message"
          value={input.message}
          onChange={(e) => {
            setInput({ ...input, message: e.target.value });
          }}
        />
        <button onClick={sendEmail} className="sendBtn">
          <IoIosSend className="sendIcon" />
          Send Message{" "}
        </button>
      </form>
    </>
  );
}
