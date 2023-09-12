import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <login className='login'>
      <div className='login__container'>
        <Link className='login__logo' to='/'></Link>
        <h2 className='login__title'>Рады видеть!</h2>

        <form className='login__form'>
          <p className='login__text'>E-mail</p>
          <input className='login__input' placeholder='Ваш email адрес' required />
          <p className='login__error'>Что-то пошло не так...</p>

          <p className='login__text'>Пароль</p>
          <input className='login__input' minLength={3} maxLength={25} placeholder='Ваш пароль' required />
          <p className='login__error'>Что-то пошло не так...</p>

          <button className='login__button' to='/' type='submit'>Войти</button>
        </form>
        <div className='login__singup'>
          <p className='login__subtext'>Ещё не зарегистрированы?</p>
          <Link className='login__link' to='/signup'>Регистрация</Link>
        </div>
      </div>
    </login>
  )
}

export default Login;





/* import React from 'react-router-dom'
import { Form } from 'react-router-dom';
//import Form from '../Form/Form.js'

function Login() {
  return (
    <main className='login'>
      <Form
        header='Рады видеть!'
        submit='Войти'
        text='Ещё не зарегистрированы?'
        link='Регистрация'
        path='/signup'
      >
        <div className='form__input'>
          <p className='form__input-email'>E-mail</p>
          <input type='email' className='form__input-data' placeholder='Ваш email адрес' required />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-password'>Пароль</p>
          <input type='password' className='form__input-data form__input-data_color-error' minLength={3} maxLength={25} placeholder='Ваш пароль' required />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>
      </Form>
    </main>
  )
}

export default Login
 */