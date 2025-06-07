import './contact.css'

function contact(){
    return(<section className="home-contact">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">
          For inquiries related to Ceramic, Wall, Floor, or Sanitary tiles, feel free to reach out. We’re always happy to collaborate with retailers and customers who value premium design and quality.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <strong>📍 Address</strong>
            <p>Near College, Vasudhara Dairy Road,<br />Thala, Chikhli – 396521,<br />District Navsari, Gujarat</p>
          </div>

          <div className="contact-card">
            <strong>📧 Email</strong>
            <p>shivam.trader20@gmail.com</p>
            <strong>📞 Contact</strong>
            <ul>
              <li>Rakesh Patel – 99250 30554</li>
              <li>Bharat Patel – 99250 30556</li>
            </ul>
          </div>
        </div>

      </section>);
}
export default contact;