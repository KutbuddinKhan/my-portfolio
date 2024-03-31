import React from "react";

const Contact = () => {
  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.225978726246!2d73.1516751749814!3d19.228980782007405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7943f1f10a053%3A0x33e4974e6dd6a19a!2sKajal%20Petrol!5e0!3m2!1sen!2sin!4v1711852110325!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            id="message"
            placeholder="Type your message here..."
          />

          <button 
            className="form-btn" 
            type="submit"
            data-form-btn
            >
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
            </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
