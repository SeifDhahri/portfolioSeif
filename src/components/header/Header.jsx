import React from 'react';
import Typed from 'react-typed';

export default function Header() {
   return (
      <div id='home' className='header-wrapper'>
         <div className='main-info'>
            <h1>ACCESSORY DESIGNER </h1>
            <Typed
               className='typed-text'
               strings={["Photoshop","autoCADE","3DMax","Patronage and industrial achievement","drawing "]}
               typeSpeed={60}
               backSpeed={60}
               loop
            />
            <a href="#contact" className='btn-main-offer'>contact me</a>
         </div>
      </div>
   );
};
