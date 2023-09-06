import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact-form'>
      <h1>Contact Us</h1>
        <form>
          <input type="text" name="" id="" placeholder='Name'/><br />
          <input type="email" name="" id="" placeholder='Email' /><br />
          <input type="number" name="" id="" placeholder='Phone'/><br />
          <textarea name="" id="" cols="25" rows="10" placeholder='Message'></textarea>
          <br />
          <button>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
