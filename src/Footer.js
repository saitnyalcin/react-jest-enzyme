import React from 'react';

const Footer = ({ title }) => {
  return (
    <div className="footer">
      <h1 className="title">{title}</h1>
      <p>I am the footer</p>
      <div>This is the footer of the application</div>
    </div>
  );
};

export default Footer;
