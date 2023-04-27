import React from 'react'
import './header.css'
import  people from '../../assets/people.png'
import ai from'../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
           <h1 className='gradient__text'>
           Let&apos;s Create Something incredible Using Prism-4.
           </h1>
           <p>communicate, work together, and produce. Prism-4 offers a strong and efficient project management tool. </p>
           <div className='gpt3__header-content__input'>
             <input type='email' placeholder='Your Email Address'/>
             <button type="button">Get Started </button>
           </div>
           <div className='gpt3__header-content__people'>
               <img src={people} alt='people'/>
               <p>In the previous 24 hours, 2,900 persons requested access to a visit.</p>
           </div>
           </div>
           <div className='gpt3__header_image'>
             <img src={ai} alt='ai'/>
           </div>
        
     </div>
  )
}

export default Header