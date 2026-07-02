import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1 className="contact-title">
        Contact Us
      </h1>

      <p className="contact-subtitle">
        Reach out to us anytime.
      </p>

      <div className="contact-wrapper">

        <div className="contact-info">

          <h3>Store Information</h3>

          <div className="contact-item">
            📍 Stall# G-53, Lipa City Public Market, Lipa City, Batangas
          </div>

          <div className="contact-item">
            📞 981 - 4658
          </div>

          <div className="contact-item">
            ✉ johnrichmondelacruz@gmail.com
          </div>

          <div className="contact-item">
            🕒 Monday - Sunday: 3:00 AM - 5:00 PM
          </div>

          <h3 style={{ marginTop: "30px" }}>
            Store Location
          </h3>

          <div className="map-container">

            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.0629614304553!2d121.1600636695736!3d13.94360459915429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6d0014a4ce09%3A0xdcb6e42fc558e95e!2sAmang%20and%20Beth%20Rice%20Store!5e0!3m2!1sen!2sph!4v1782877537435!5m2!1sen!2sph"
              width="100%"
              height="350"
              style={{
                border: "0",
                borderRadius: "10px"
              }}
              allowFullScreen=""
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;