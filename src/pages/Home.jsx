import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";
import TiltedCard from './TiltedCard';



function Home() {
  const [tilesData, setTilesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch("https://shivam-traders.onrender.com")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setTilesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Group tiles by category for UI rendering
  const groupedTiles = tilesData.reduce((acc, tile) => {
    if (!acc[tile.category]) acc[tile.category] = [];
    acc[tile.category].push(tile);
    return acc;
  }, {});

  // Sample slider images - you can replace with your Cloudinary URLs or dynamic images if needed
  const sliderImages = [
    { url: "https://res.cloudinary.com/dixkpd5w5/image/upload/v1749037663/2_t8gpjo.jpg" },
    { url: "https://res.cloudinary.com/dixkpd5w5/image/upload/v1749037663/0_qana0x.jpg" },
    { url: "https://res.cloudinary.com/dixkpd5w5/image/upload/v1749037662/1_bwdzdt.jpg" },]

  if (loading) return <p>Loading tiles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="slider-container">
  <SimpleImageSlider
    width="100%"            // take full width of container
    height={600}            // adjust to desired height
    images={sliderImages}
    showBullets={true}
    showNavs={true}
    autoPlay={true}
    autoPlayDelay={2.5}
    style={{ borderRadius: "18px", objectFit: "cover" }}
  />
</div>

      <section class="impression-section">
  <p class="impression-text animate-pop">FEEL THE ELEGANCE</p>
  <p class="impression-subtext animate-pop delay">Tiles that redefine spaces</p>
</section>

      {Object.entries(groupedTiles).map(([category, items]) => (
        <div data-aos="zoom-in" key={category}>
          <h2 className="category-heading">{category}</h2>
          <div className="scroll-row">
            {items.map((tile, idx) => (
              <TiltedCard
                imageSrc={tile.img}
                altText="Kendrick Lamar - GNX Album Cover"
                captionText={tile.company}
                containerWidth="auto"
                containerHeight="auto"
                imageHeight="auto"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    {tile.name}
                  </p>
                }
              />

            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
