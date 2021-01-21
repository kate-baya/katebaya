import React from 'react'
import { Router } from 'react-router-dom'

class AboutMe extends React.Component {
  render () {
    return (
      <Router>
      <div className='AboutMe'>
        <p>
          I have enjoyed working within the music industry over the last five years as a music publisher, music licensor, and touring musician. 
          However, Covid-19 highlighted the importance of working within an industry that provides stability and opportunity. Having an interest in computing and gaming, 
          I decided to look to information systems and technology. 
        </p>
        <p>
          The skills I have developed and cultivated from my previous experience are highly transferrable. 
          Music licensing has taught me the value of precise and succinct communication in order to successfully convey complex negotiations and contracts. 
          Similarly, I practice writing clean and concise code. I have also had the opportunity to manage large database systems making sure to be clear and 
          accurate with the data I was handling. Developing my problem solving and technical skills throughout my studies at Dev Academy, 
          I had the opportunity to build websites using React + Redux. 
        </p>
        <p>
          I also have an intense drive to learn and am interested in continuing on from my studies. Therefore, working for a company that provides opportunities to stretch myself and grow is of great importance. 
          I am excited to be stepping into the tech industry with a solid understanding of agile practices, git hub, and full-stack development. I have a positive can-do attitude and 
          am enthusiastic for the future of tech and how we can use tech to contribute to the well-being of others. 
        </p>
      </div>
      </Router>
    )
  }
}

export default AboutMe