import React from 'react';

const Footer = () => {
    return (
        
        <footer className="page-footer font-small  pt-2" style={{backgroundColor:"black",color:'#fff'}}>
          <div class="footer-copyright text-center py-2">
          Copyright © {new Date().getFullYear()}  :
            <span> All right reserved by saimumBiz</span>
          </div>
        </footer>
      
   
    );
};

export default Footer;