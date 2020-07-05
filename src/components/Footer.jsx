import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import Title from './Title';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
      <footer>
          <Title title="Get in touch" />
          <div>
            {footer && footer.map(footer => {
            const { id, name, url } = footer;
            return (
                <a key={id} href={url}>{name}</a>
            )
            })}
          </div>
          <p>Copyright © {new Date().getFullYear()} AJ Jigjidsuren</p>
      </footer>
  );
};

export default Footer;
