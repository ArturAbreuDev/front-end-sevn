import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeft from "../../utils/icons/ArrowLeft";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      {location.pathname !== "/" && (
        <div className="icon" onClick={handleBackClick}>
          <ArrowLeft />
        </div>
      )}
      <h1 className="title-header">SEVN NEWS</h1>
    </header>
  );
}

export default Header;
