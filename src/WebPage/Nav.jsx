import React from 'react'

const Nav = () => {
  return (
    <div className='Nav'>
      <div className="Nav_logo">
       <img src='/Images/jk logo.jpg' alt='logo'></img>
       <h1>JOSAPH KISHORE<br/><span id='Logo'></span></h1>
       
      </div>
      <div className="Nav_link">
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Project'>Projects</a>
        <a href='#Contact'>Contact</a>
      </div>
    </div>
  )
}

export default Nav
