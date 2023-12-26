import React from 'react';

function About() {
  function website(){
    window.open("https://www.matthewsalaway.com", '_blank');
  }
  function git(){
    window.open("https://github.com/Msalaway/Wordle-Hacker", "_blank");
  }
  return (
    <div>
      <div className='about'>
        Wordle, but with hints!
        Higher Score = Better Choice
      </div>
      <a className='about'>Made By: Matthew Salaway</a>
      <div onClick={website}>
        <a className='link'>Personal Website</a>
      </div>
      <div onClick={git}>
        <a className='link'>GitHub</a>
      </div>
    </div>
  )
}

export default About