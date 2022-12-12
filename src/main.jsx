import React from 'react'
import ReactDOM from 'react-dom/client'






function BusinessCard(){
    return (
        <main>
          <section className='header-section'>
            <img src="/assets/user-image.png" className='user-image'/>
          </section>

          <section className='profile-desc'>
            <h1>Luara Smith</h1>
            <p className='career-name'>Frontend Developer</p>
            <small>laurasmith.website</small>
            <div className='button-container'>
                <button className='email-btn'>
                    <i className='fa fa-envelope'></i>
                    Email
                </button>
                <button className='linkedin-btn'>
                    <i className='fa fa-linkedin'></i>
                    Linkedin
                </button>
            </div>
          </section>

          <section className='about-section'>
            <h2>About</h2>
            <p>
             I am a frontend developer with a particular interest in making things simple 
             and automating daily tasks. I try to keep up with security 
             and best practices, and am always looking for new things to learn.
            </p>

            <h2>Interests</h2>
            <p>
             Food expert, Music scholar, Reader, Internet fanatic,
             Bacon buff, Entrepreneur, 
             Travel geek, Pop culture ninja, Coffee fanatic.
            </p>
          </section>

          <section className='footer-section'>
            <div className='social-Iconlinks'>
              <img src="/assets/twitter-icon.svg" />
              <img src="/assets/facebook-icon.svg" />
              <img src="/assets/instagram-icon.svg" />
              <img src="/assets/github-icon.svg" />
            </div>
          </section>
        </main>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BusinessCard />)


