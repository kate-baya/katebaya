import React from 'react'

export default function Updates() {
  return (
    <div className='container is-max-desktop'>
      <div className='columns'>
        <div className='column'>
          <div className='updates has-text-centered'>
            <h1 className='title is-2'>Updates</h1>
            <p className='subtitle'>My thoughts, progression & learning</p>
          </div>
          <div className='columns'>
            <div className='column is-narrow'>
              <figure className="image is-48x48">
                <img className='first' src='../images/watermelon.png' />
              </figure>
            </div>
            <div className='column'>
              <h3 className='title is-3'>Finishing up and moving forward</h3>
              <p>02-04-2021</p>
              <div className='border content'>
                <p>It's been a major shift moving from intense study to being out on my own. After the holiday period, I've ended up among the large number of people job searching, looking for something new, something stable. Right now I'm just sharpening my skills. Working hard, challenging myself to solve problems, looking back at those solutions and tidying them up even further.</p>
                <p>Funnily enough, it's been testing that has proven to be the biggest test. Writing tests for code not only requires you to thoroughly know how you code works, you also need to know why your code might potentially <strong>not</strong> work. As I am still fairly new to all of this, I've decided to take a break from starting any new projects and take a good hard look at testing. The aim of the game is to write clean, consise, and water-tight code.</p>
                <p>So for the next little while, that's what I'll be doing. The plan being to update this page with my lessons learnt from testing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}