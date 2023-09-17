import React from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'
import MoviePoster from '../../../images/baskia.png'

function MoviesCard() {
  const location = useLocation()

  return (
    <div className='moviescardlist__card'>
      <a href='https://rutube.ru' className='moviescardlist__link' target='_blank' rel='noreferrer'>
        <img className='moviescardlist__pic' src={MoviePoster} alt='Обложка' id="01" />
      </a>
      {location.pathname === '/movies' && (<button className='button-add' type='button'></button>)}
      {location.pathname === '/saved-movies' && (<button className='button-remove' type='button'></button>)}

      <div className='moviescardlist__info'>
        <h2 className='moviescardlist__name'>33 слова о дизайне</h2>
        <p className='moviescardlist__duration'>1ч 17м</p>
      </div>
    </div>
  )
}

export default MoviesCard