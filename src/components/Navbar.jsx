import { useNavigate } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  const navigate = useNavigate();

  const handleSizeClick = (size) => {
    navigate(`/filtered/${size}`);
  };

  return (
    <div className="nav">
      <div className="nav-links">
        <p onClick={() => navigate("/")}>HOME</p>
        <p onClick={() => navigate("/About")}>ABOUT</p>
        <p onClick={() => navigate("/contact")}>CONTACT</p>
        <div className="dropdown">
          <p className="dropdown-toggle">TILES</p>
          <div className="dropdown-menu">
            <p onClick={() => handleSizeClick("4 x 4")}>4 x 4</p>
            <p onClick={() => handleSizeClick("2 x 2")}>2 x 2</p>
            <p onClick={() => handleSizeClick("18 x 12")}>18 x 12</p>
            <p onClick={() => handleSizeClick("16 x 16")}>16 x 16</p>
          </div>
        </div>
      </div>
      <h1 className="logo">SHIVAM</h1>
    </div>
  );
};

export default Navbar;
