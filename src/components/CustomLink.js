import { Link, useLocation } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      exact
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

export default CustomLink;
