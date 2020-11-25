import React, { useContext } from "react";
import PortfolioContext from "../context/context";

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright © {new Date().getFullYear()} AJ Jigjidsuren
      </p>
    </footer>
  );
};

export default Footer;
