import "./contact.css";
import "react-toastify/dist/ReactToastify.css";
import React, {  useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_ir0abwa",
        "template_njumzjc",
        formRef.current,
        "-K4Amm8UASdyF4-Et"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          autoClose: 3000,
          pauseOnHover: false,
          position: "top-left",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again later!", {
          autoClose: 3000,
          pauseOnHover: false,
          position: "top-left",
        });
      })
      .finally(() => {
        setMessage(false);
      });

    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h5 className="contact__h5">
          I do receive your messages and will respond asap if the valid email is
          provided :)
        </h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>Abbasmojarrad7@gmail.com</h5>
              <a
                rel="noreferrer"
                href="mailto:Abbasmojarrad7@gmail.com"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button
              disabled={message}
              type="submit"
              className="btn btn-primary"
            >
              {message ? "Loading ..." : "Send Message"}
            </button>
          </form>
        </div>
        <ToastContainer closeButton={false} theme="dark" />
      </section>
    </>
  );
};

export default Contact;
