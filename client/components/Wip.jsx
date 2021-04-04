import React from 'react'

export default function Wip() {
  return (
    <div className='wip container is-max-desktop'>
      <div className='block'>
        <div className='columns'>
          <div className='column'>
            <h1 className='has-text-centered title space'>Work In Progress</h1>
            <div className='columns'>
              <div className='column is-narrow'>
                <figure className="image is-48x48">
                  <img className='first' src='../images/heart.png' />
                </figure>
              </div>
              <div className='column'>
                <h3 className='title'>Profile Creator</h3>
                <div className='content'>
                  <p>A browser application that provides a template to build, store and display beautiful web-CVs.</p>
                  <div className='border'>
                    <p>This is a collaborated effort between <a href='https://github.com/kate-baya'>myself</a>, <a href='https://github.com/sarah-knowles'>sarah-knowles</a> and <a href='https://github.com/andrewy9'>andrewy9</a>.</p>
                    <p>Key Technologies</p>
                    <ul>
                      <li>React.js</li>
                      <li>Reudx.js</li>
                      <li>@React-testing-library</li>
                      <li>Jest</li>
                      <li>Express.js</li>
                      <li>SQLite & Knex</li>
                      <li>Google Auth</li>
                      <li>Miro</li>
                      <li>Sass</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-narrow'>
                <figure className="image is-48x48">
                  <img className='first' src='../images/star.png' />
                </figure>
              </div>
              <div className='column' id='devHub'>
                <h3 className='title'>Dev-Hub</h3>
                <div className='content'>
                  <p>An online blog platform with a focus on project specific blogs for new developers to learn and organise their thoughts.</p>
                  <div className='border'>
                    <p>I began this project with the intention of creating a single blog to track the progress of Profile Creator. This project later expanded and is now in the works to become an online blogging platform. Users will be able to sign in using Google, and from there they will be able to checkout other users projects/blogs as well as create their own.</p>
                    <p>Key Technologies</p>
                    <ul>
                      <li>React.js</li>
                      <li>Reudx.js</li>
                      <li>@React-testing-library</li>
                      <li>Jest</li>
                      <li>Express.js</li>
                      <li>SQLite / Knex</li>
                      <li>Google Auth</li>
                      <li>Miro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-narrow'>
                <figure className="image is-48x48">
                  <img className='first' src='../images/pizza.png' />
                </figure>
              </div>
              <div className='column'>
                <h3 className='title'>Future Projects</h3>
                <div className='content'>
                  <p>Currently seeking funding to develop an application that reads and responds to brain waves that are generated when listening to music</p>
                  <div className='border'>
                    <p>Watch this space!</p>
                    <p>Key Technologies</p>
                    <ul>
                      <li>React.js</li>
                      <li>Reudx.js</li>
                      <li>@React-testing-library</li>
                      <li>Jest</li>
                      <li>Express.js</li>
                      <li>SQLite / Knex</li>
                      <li>Google Auth</li>
                      <li>Miro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}