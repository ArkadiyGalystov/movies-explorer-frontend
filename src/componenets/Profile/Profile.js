import './Profile.css'
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import useForm from '../hook/useForm';

const Profile = ({loggedIn, isLoading}) => {

  const {isFormValid, } = useForm();

  const [isLastValues] = useState(false)
  return (

    <main className='profile'>
      <Header loggedIn={loggedIn} />
      <section className='profile__container'>
        <form className='profile__form'>
          <h3 className='profile__title'>Привет, Аркадий!</h3>
          <div className='profile__fields'>
            <label className='profile__name'>Имя</label>
            <input
              className='input'
              defaultValue='Аркадий'
              placeholder='Имя'
              minLength={2}
              maxLength={12}
              required
            />
          </div>

          <div className='profile__line'></div>

          <div className='profile__fields'>
            <label className='profile__name'>E-mail</label>
            <input
              className='input'
              defaultValue='pochta@yandex.ru'
              placeholder='email@email.ru'
              required
            />
          </div>

        </form>

        <form className='profile__form'>
        <p className='profile__error'>При обновлении профиля произошла ошибка.</p>
        <input type="submit" disabled={!isFormValid ? true : false} className={!isFormValid || isLoading || isLastValues ? 'profile__button' : 'profile__button-save' } value='Редактировать' />
        </form>

        {/* <form className='profile__form'>
          <p className='profile__error'>При обновлении профиля произошла ошибка.</p>
          <input type='button' className='profile__button' value='Редактировать' />
        </form> */}
        <Link to='/' className='profile__link'>Выйти из аккаунта</Link>
      </section>
    </main>
  )
}

export default Profile
