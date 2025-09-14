import React from 'react';

const Footer = () => {
    return <div>
      <footer className="footer sm:footer-horizontal bg-base-100 text-black-content items-center justify-center p-4">
  <aside className="grid-flow-col  items-center">
   
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  
</footer>
    </div>
};

export default Footer;