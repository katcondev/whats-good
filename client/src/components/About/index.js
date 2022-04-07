import React from 'react';
import logo from '../../assets/images/BROWN-LOGO.png'

import './index.scss'

function About() {
  return (
    <div className='container image-fluid'>
        <img className='animate__animated animate__bounce ' src={logo} style={{ width: "65%" }} />
        <h1>What's Good - An unapologetic experience</h1>
        <p>Make the best choice in deciding where to invest your time and money with our Whats-Good mobileapp. It allows BIPOC clients to view and post 
          reviews about their experiences through the lenses of Black people. Our app is to bring awareness to Black peoples' experiences, whether they be 
          positive or negative. In doing so, other Black people and allies can be aware of businesses' ethics, customer service and more to ensure a beneficial 
          experience overall. Whats-Good mobile app is designed with tools to give Black people foresight into what type of businesses they are will
           giving their resources to more confidently.</p>
        <button type='submit' className='btn-wg' size='lg'>SAY LESS</button>
    </div>
  )
}

export default About;