import React from 'react'

export default function About() {
  return (
    <div className='aboutMe container'>
      <div className='columns is-centered is-two-thirds'>
        <div className='column'>
          <h1 className='title has-text-centered'>A Little About Myself</h1>
          <div className='columns is-centered'>
            <div className='column is-two-fifths'>
              <img className='' src='../images/kate.jpeg' />
            </div>
            <div className='column is-two-fifths'>
              <h3 className='subtitle'>I'm Kate, a Full Stack Developer who is always looking to learn new technologies and development techniques.</h3>
              <div className='block'>
                <p>I'm relatively new to the coding scene, as I spent much of my early working life as a touring musician and Music Publisher and Licensor. Covid threw a lot of things out of whack for me, so I decided to persue a different and more stable career. I've always loved computers and technology, and I'm a bit of a creative, so coding seemed like a no brainer.</p>
              </div>
              <div className='block'>
                <p>And so far so good! I jumped into a course at Dev Academy and have loved every minute of it. From Handlebars to React-Redux we learnt it all. I've continued my learning journey after Dev Academy and I'm now looking to join a strong team where I can further my experience and career.</p>
              </div>
              <div className='block'>
                <p>Aside from coding, I love music and snowboarding. I'm a drummer and music producer and try to head to the skii field when I have spare time. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}