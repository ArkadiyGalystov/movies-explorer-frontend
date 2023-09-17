import { Link, Route, Routes } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <Routes>
      <Route path='/' element={
    <register className='register'>
      <div className='register__container'>
        <Link className='register__logo' to='/'></Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>

          <p className='register__text'>Имя</p>
          <input className='register__input' type='text' defaultValue='Виталий' minLength={2} maxLength={12} placeholder='Ваше имя' required />
          <p className='register__error'>Что-то пошло не так...</p>

          <p className='register__text'>E-mail</p>
          <input className='register__input' type='email' defaultValue='pochta@yandex.ru' placeholder='Ваш email' required />
          <p className='register__error'>Что-то пошло не так...</p>

          <p className='register__text'>Пароль</p>
          <input className='register__input' type='password' minLength={3} maxLength={25} defaultValue='••••••••••••••' placeholder='Ваш пароль' required />
          <p className='register__error'>Что-то пошло не так...</p>

          <button className='register__button' to='/' type='submit'>Зарегистрироваться</button>
        </form>
        <div className='register__singin'>
          <p className='register__subtext'>Уже зарегистрированы?</p>
          <Link className='register__signin' to='/signin'>Войти</Link>
        </div>
      </div>
    </register>
    } />
    </Routes>
  )
}

export default Register;







/* import React from 'react';
import { Form } from 'react-router-dom';
//import Form from '../Form/Form.js'

function Register() {
  return (
    <main className='register'>
      <Form
        header='Добро пожаловать!'
        submit='Зарегистрироваться'
        text='Уже зарегистрированы?'
        link='Войти'
        path='/signin'
      >
        <div className='form__input'>
          <p className='form__input-name'>Имя</p>
          <input className='form__input-data' type='text' defaultValue='Виталий' minLength={2} maxLength={12} placeholder='Ваше имя' required />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-email'>E-mail</p>
          <input className='form__input-data' type='email' defaultValue='pochta@yandex.ru' placeholder='Ваш email' required />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-password'>Пароль</p>
          <input className='form__input-data form__input-data_error' type='password' minLength={3} maxLength={25} defaultValue='••••••••••••••' placeholder='Ваш пароль' required />
          <p className='form__error form__error-text'>Что-то пошло не так...</p>
        </div>
      </Form>
    </main>
  )
}

export default Register
 */