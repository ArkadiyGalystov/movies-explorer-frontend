import React from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'
import MoviePoster from '../../../images/baskia.png'
//import { moviesData } from "../../../utils/MoviesArray";

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

  /* return (
    <>
      {moviesData.map((movie, index) => (
        <div className='card' key={index}>
          <img src={movie.image} alt={movie.title} className='card__pic' />
          <button className={`card__button_save ${movie.isSaved ? 'card__button_remove' : ''}`}>
          </button>
          <div className='card__info'>
            <h2 className='card__name'>{movie.title}</h2>
            <p className='card__duration'>{movie.duration}</p>
          </div>
        </div>
      ))}
    </>
  );
} */

export default MoviesCard