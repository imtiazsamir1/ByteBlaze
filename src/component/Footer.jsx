import React from 'react';

const Footer = () => {
    return <div>
      <footer className="footer sm:footer-horizontal bg-base-100 text-black-content items-center p-4">
  <aside className="grid-flow-col items-center">
   
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
     
    </a>
    <a>
     
    </a>
    <a>
      
    </a>
  </nav>
</footer>
    </div>
};

export default Footer;