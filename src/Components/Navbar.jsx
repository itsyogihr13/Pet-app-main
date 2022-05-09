import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
export const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "purple",
          padding: "10px",
        }}
      >
        <Button variant="contained">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </Button>
        <Button variant="contained">
          <Link
            to="/listing/create"
            style={{ textDecoration: "none", color: "white" }}
          >
            Create
          </Link>
        </Button>
      </div>
    </>
  );
};
