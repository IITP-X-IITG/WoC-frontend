import { Link, useLocation } from "react-router-dom";

const CustomProfileLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      exact
      className="profile-button-collapse"
      to={to}
      style={{
        textDecoration: "none",
        color: isActive ? "rgb(103 212 223)" : "#e4e6e9",
        fontWeight: isActive ? 500 : "normal",
        borderBottom: isActive ? '2px solid #589ba2': 'none'
      }}
    >
      {children}
    </Link>
  );
};

export default CustomProfileLink;
