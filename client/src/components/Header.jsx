import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { IoBagCheckSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const user = useSelector((state) => state.user.user);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <Link to="/products">Products</Link> {/* Use Link instead of <a> */}
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div
          className="action_container"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
          <CgProfile />
          <span className="action_name">
            {isUserLoggedIn ? user : "Log In"}
          </span>
        </div>

        <div className="action_container">
          <FcLike />
          <span className="action_name ">WishList</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBagCheckSharp />
          <span className="action_name ">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
