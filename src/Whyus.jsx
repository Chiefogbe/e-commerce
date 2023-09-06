import React from 'react'

const Whyus = () => {
  return (
    <div className='why-us-div'>
      <h1 className='why-us-h1'>WHY SHOP WITH US</h1>

      <div className='shop-us-container'>
        <div className='shop-us-div'>
          <img src="./images/truck.svg" alt="" srcset="" />
          <h4>Fast Delivery</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, magnam.</p>
        </div>

        <div className='shop-us-div'>
          <img src="./images/free.svg" alt="" srcset="" />
          <h4>Free Shipping</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, magnam.</p>
        </div>

        <div className='shop-us-div'>
          <img src="./images/high-quality.svg" alt="" srcset="" />
          <h4>Best Quality</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, magnam.</p>
        </div>

        <div className='gifts-div'>
          <img src="./images/gifts.png" alt="" srcset="" className='gifts-image'/>
          <h1>GIFTS FOR YOUR LOVED ONES</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, reprehenderit. Eum laboriosam expedita adipisci beatae possimus placeat debitis in, deserunt ullam laudantium ad similique saepe, ex et ratione accusamus aspernatur.</p>
          <br />
          
          <div className='gifts-button-div'> 
          <button className='gifts-button1'>BUY NOW</button>
          <button className='gifts-button2'>SEE MORE</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Whyus
