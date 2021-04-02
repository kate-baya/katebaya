import React from 'react'

export default function Contact() {
  return (
    <div className='contact container'>
      <div className='columns is-centered'>
        <div className='column first'>
          <h1 className='title'>Get in touch</h1>
          <div className='block'>
            <p>Phone: <a href='tel:0220260684'>022 026 0684</a></p>
          </div>
          <div className='block'>
            <p>Email: <a href='mailto:ksbaya@gmail.com'>ksbsya@gmail.com</a></p>
          </div>
        </div>

        <div className='lineSpace'>|</div>

        <div className='column'>
          <h1 className='title'>Socials</h1>
          <div className='block'>
            <a href='https://github.com/kate-baya'>Github</a>
          </div>
          <div className='block'>
            <a href='https://www.linkedin.com/in/kate-baya-a9bb83201/'>Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}