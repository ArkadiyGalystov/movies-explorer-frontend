import React from 'react-router-dom'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({ card, cards }) {
  return (
    <section className='moviescardlist moviescardlist__movies moviescardlist__saved-movies'>
      <article className='moviescardlist__cards'>
        {cards.map((card, index) => (<MoviesCard key={index} />))}
      </article>
    </section>
  )
}

export default MoviesCardList
