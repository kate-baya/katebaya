import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [state, setState] = useState({
    gif: '../images/wavingDotsStill.jpg'
  })

  const startGif = () => {
    setState({ gif: '../images/wavingDots.gif' })
  }

  const stopGif = () => {
    setState({ gif: '../images/wavingDotsStill.jpg' })
  }

  return (
    <div className="container is-max-desktop">
      <div className='columns is-vcentered'>
        <div className='column'>
          <p className="title">
            Hi there! My name is Kate
            </p>
          <p className="subtitle">
            I'm a fullstack developer
            </p>
          <p>I'm always looking for new projects to contribute to.</p>
        </div>

        <div className='column'>
          <figure className="image is-180x180">
            <img className='is-rounded' onMouseOver={startGif} onMouseOut={stopGif} src={state.gif} />
          </figure>
        </div>
      </div>
    </div>
  )
}