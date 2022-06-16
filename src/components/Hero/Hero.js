import './Hero.scss';
import data from '../../data/data.json'
import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="img">
        <img src="./images/hero.png" alt="Hero" />
      </div>
      <div className="hero-text">
        { data.map((hero) => {
          return (
            <React.Fragment key={ hero.hero.id }>
              <h1 className='title'>{ hero.hero.title }</h1>
              <p className='subtitle'>{ hero.hero.subtitle }</p>
            </React.Fragment>
          )
        }) }
      </div>
    </section>
  )
}