import React from 'react';
import './style.css'

function AboutMe() {
  const style = { float: 'left', width: '300px', margin: '10px 10px' }

  return(
    <div className='row justify-content-center'>
      <article className='col-9'>
        <h1>About Me</h1>
        <br/>
        <img src="https://echeck.org/wp-content/uploads/2017/02/Dog-in-a-Suit.jpg" alt="dog-with-suit" style={style}/>
        <p>
          My name is Siyuan Huo, or you can call me George. After earning my Batchelor of Science degree in Computer Science in 2020, I entered the IT world to explore my passion for developing and researching.
        </p>
        <p>
          As a graduate from University of Toronto with a B.Sc. degree in Computer Science and Mathematics, my academic experience in software development life cycle (SDLC), Algorithm Design have given me a solid base upon which I plan to build my career. 
        </p>
      </article>
    </div>
  )
}

export default AboutMe