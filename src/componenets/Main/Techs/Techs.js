import React from 'react'
import './Techs.css'

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h3 className='techs__subtitle'>Технологии</h3>
      <div className='techs__content'>
        <h2 className='techs__title'>7 технологий</h2>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className='techs__item'>
        <li className='techs__list'>HTML</li>
        <li className='techs__list'>CSS</li>
        <li className='techs__list'>JS</li>
        <li className='techs__list'>React</li>
        <li className='techs__list'>Git</li>
        <li className='techs__list'>Exspress.js</li>
        <li className='techs__list'>mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs
