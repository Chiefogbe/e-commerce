import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube, } from 'react-icons/fa'
import{CiLocationOn} from 'react-icons/ci'
import {BiPhone, BiCopyright,} from 'react-icons/bi'
import{TfiEmail} from 'react-icons/tfi'


const Newsletter = () => {
  return (
    <div className='Newsletter-container'>
     
      <div className='Newsletter-div'>
      <div className='social-media-icons'>
      <FaFacebook className='media-icons'/>
        <FaTwitter className='media-icons'/>
        <FaInstagram className='media-icons'/>
        <FaYoutube className='media-icons'/>
      </div>

        <h3>ABOUT US</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in, error repellendus natus nostrum incidunt animi quod odio ipsa minima voluptatibus et sed at sequi facilis consequatur nobis laboriosam? Placeat?</p><br />

        <h3>Newsletter</h3>
        <input type="email" name="" id="" /><br />
        <button><h5>SUBSCRIBE</h5></button>
        <br />
        <br />
        <h3>NEED HELP?</h3>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A officiis hic, quae commodi expedita atque iste in vitae deserunt vero nostrum deleniti facere dignissimos dolores perspiciatis cupiditate voluptas facilis dicta.</p>
        <br />

        <h5>CONTACT US</h5>
        <div className='contact-icons'>
        <div className='contact-icon'><CiLocationOn/> <p>Gb road 123, London, UK</p></div>

        <div className='contact-icon'>
        <BiPhone/> <p>+01 12345678901</p>
        </div>
       
       <div className='contact-icon'>
       <TfiEmail/> <p>mail@domain.com</p>
       </div>
        </div>

        <br />
        <hr />

       <div className='copyright-icon' >
       <BiCopyright/> <h5>All Rights Reserved. Giftos Template Demo</h5>
       </div>  
      </div>
    </div>
  )
}

export default Newsletter
