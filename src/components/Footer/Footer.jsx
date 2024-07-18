import "./Footer.css";

export default function Footer({ isDarkMode }) {
  const thisYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}>
      <div className="container">
        <div className="footerContent">
          <p style={{ color: "#87ae73", padding: "2rem 0" }}>
            Made with ❤ by TheBlaiseCode
          </p>
          <p
            className="footNote"
            style={{ color: isDarkMode ? "#fff" : "#333" }}>
            &copy; {thisYear} | Unsplash API{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
