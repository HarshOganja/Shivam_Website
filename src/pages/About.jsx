import React from 'react';
import './About.css';
import '../color.css';


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#dee1e6]">
      <section className="home-notes">
        <div className="home-first">
          <div data-aos="fade-up-right" className="home-content10">
            <h1 className="home-subheading">Who We Are ?</h1>
            <h2 className="home-header11">
              Shivam Traders is a trusted tile wholesaler located near College, Vasudhara Dairy Road, Thala, Chikhli – 396521, Navsari District, Gujarat.
              Since 2020, we have been committed to delivering high-quality and designer tiles at the best value.
              Whether it's for commercial projects or residential spaces, our wide selection of Ceramic, Wall, Floor, and Sanitary tiles ensures a perfect match for every need.
            </h2>

          </div>
          <img
            alt="about us"
            src="https://res.cloudinary.com/dixkpd5w5/image/upload/v1749035640/2150334533_1_nfb14u.jpg"
            className="home-image12 image-notes"
          />
        </div>

        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content11">
            <h1 className="home-subheading">What We're Looking For ?</h1>
            <h2 className="home-header12">
              We are actively seeking well-maintained retail outlets to expand our reach. If you're a retailer
              with a passion for quality design and great service, join us in bringing stunning tiles to customers everywhere.
            </h2>
          </div>
          <img
            alt="retailer call"
            src="https://res.cloudinary.com/dixkpd5w5/image/upload/v1749035434/firm-handshake_p3imqm.jpg"
            className="home-image12 image-notes"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
