import React from 'react';
import logo from '../../assets/images/BROWN-LOGO.png'

import './index.scss'

function About() {
  return (
    <div className='container image-fluid'>
        <img className='animate__animated animate__bounce ' src={logo} style={{ width: "65%" }} />
        <h1>What's Good - An unapologetic experience</h1>
        <p>I'm baby four loko labore fugiat flannel, aute slow-carb forage. Tempor listicle VHS duis tofu 
          ut gochujang consectetur air plant fam gentrify. Vaporware stumptown photo booth kogi reprehenderit 
          pinterest anim. Next level duis cillum quis cray vexillologist bespoke.</p>
        <button type='submit' className='btn-wg' size='lg'>SAY LESS</button>
    </div>
  )
}

export default About;