import React, { useState } from "react";
import imgBack from "../../../src/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Banner from "../../components/banner/banner";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message envoyé par ${name} (${email}): ${message}`);
  };

  return (
    <>
      <Banner img={imgBack} alt="Paysage de montagne" />
      <div className="contact">
        <h2>Vous avez des questions ?</h2>
        <p>N'hésitez pas à nous contacter</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
               name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button name="button" type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}

export default Contact;