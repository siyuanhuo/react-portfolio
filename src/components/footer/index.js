import React from 'react';
import './style.css'

function Footer() {
  return(
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1">
            <a href="https://github.com/siyuanhuo">GitHub</a>
          </div>
          <div className="col-1">
            <a href="https://www.linkedin.com/in/siyuanhuo/">LikedIn</a>
          </div>
          <div className="col-1">
            <a href="./resume.docx" download>Resume</a>
          </div>
        </div>
        
        
      </div>
    </footer>
  )
}

export default Footer