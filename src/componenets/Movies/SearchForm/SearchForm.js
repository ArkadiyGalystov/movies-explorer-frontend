import React from 'react-router-dom'
import './SearchForm.css'

function SearchForm() {
  return (
    <section className='searchform searchform__movies'>
      <form className='searchform__input-container'>
        <input
          className='searchform__input'
          placeholder='Фильм'
          required
        ></input>
        <button className='searchform__btn' type='submit'></button>
      </form>
      <div className='searchform__checkbox-conteiner'>
        <input
          type='checkbox'
          className='searchform__checkbox'
          id='searchform__checkbox'
          value='yes'
        ></input>
        <label className='searchform__label' htmlFor='searchform__checkbox'>Короткометражки</label>
      </div>
      <div className='searchform__line'></div>
    </section>
  )
}

export default SearchForm
