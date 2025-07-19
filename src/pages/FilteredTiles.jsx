// src/pages/FilteredTiles.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';
import TiltedCard from './TiltedCard';



const FilteredTiles = () => {
    const { size } = useParams();
    const [groupedTiles, setGroupedTiles] = useState({});

    useEffect(() => {
        const fetchTiles = async () => {
            try {
                const res = await axios.get("https://shivam-traders.onrender.com");
                const filtered = res.data.filter(tile => tile.size === size);

                // Group by category
                const grouped = filtered.reduce((acc, tile) => {
                    acc[tile.category] = acc[tile.category] || [];
                    acc[tile.category].push(tile);
                    return acc;
                }, {});

                setGroupedTiles(grouped);
            } catch (err) {
                console.error("Error fetching tiles:", err);
            }
        };

        fetchTiles();
    }, [size]);

    return (
        <div>
            <section class="impression-section">
                <p class="impression-text animate-pop">Tiles of size: {size}</p>
            </section>

            {Object.entries(groupedTiles).map(([category, items]) => (
                <div data-aos="zoom-in" key={category}>
                    <h2 className="category-heading">{category}</h2>
                    <div className="scroll-row">
                        {items.map((tile, idx) => (
                            <TiltedCard
                                imageSrc={tile.img}
                                altText={tile.name} 
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
        </div>
    );
};

export default FilteredTiles;
