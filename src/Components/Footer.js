import React from 'react';

const Footer = ({data}) => {

    if(data){
      var networks= data.social.map((network) => {
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>
         <div className="row">
            <div className="twelve columns">
            <p className="lead">LET'S GET IN TOUCH</p>
               <ul className="social-links">
                  {networks}
               </ul>

               <ul className="copyright">
                  <li>&copy; Copyright 2020 Rajath Anand</li>
                  <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
               </ul>

            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
         </div>
      </footer>
    );
}

export default Footer;