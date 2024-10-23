import React from 'react'

const Home = () => {
  return (
    <div className='Home' id='Home'>
        <div className="Home_left">
        <h1>HI,<br/>
         I`m <span>josaph kishore</span>
         <br/> ReactJS Developer</h1>
         <div className="Home_button">
            <a href='https://wa.link/8pa5qi'>Contact</a>
         </div>
        </div>
        <div className="Home_right">
        <img src='/Images/Profile.png' alt='Profile'></img>
        </div>
    </div>
  )
}

export default Home
