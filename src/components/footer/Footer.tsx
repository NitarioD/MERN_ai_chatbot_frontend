import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "20px", textAlign: "center", padding: "20px" }}>
          Built By
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://github.com/nitariod"}
            >
              <span style={{ textDecoration: "underline" }}> Nitariod </span>
            </Link>
          </span>
          Copyright ©{date} | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
