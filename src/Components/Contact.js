import React, { useState } from 'react';

const Contact = ({ data }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:${data?.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(name + ': ' + message)}`
    );
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">{data?.contactmessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  size="35"
                  id="contactName"
                  name="contactName"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="email"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  value={subject}
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="10"
                  id="contactMessage"
                  name="contactMessage"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div>
                <button type="submit" onClick={handleClick} className="submit">
                  Send Message
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Info</h4>
            <p className="address">
              <i className="fa fa-user"></i> {data?.name}<br />
              <i className="fa fa-map-marker"></i> {data?.address.city}, {data?.address.state}, {data?.address.country}<br />
              <i className="fa fa-phone"></i> {data?.phone}<br />
              <i className="fa fa-envelope"></i> {data?.email}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
