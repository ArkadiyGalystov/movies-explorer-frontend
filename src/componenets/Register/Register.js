import React from 'react';
import Form from '../Form/Form.js'

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
          <input className='form__input-data' type='text' defaultValue='Виталий' minLength={2} maxLength={12} required />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-email'>E-mail</p>
          <input className='form__input-data' type='email' defaultValue='pochta@yandex.ru' required />
          <p className='form__error'>Что-то пошло не так...</p>
        </div>

        <div className='form__input'>
          <p className='form__input-password'>Пароль</p>
          <input className='form__input-data form__input-data_error' type='password' minLength={3} maxLength={25} defaultValue='••••••••••••••' required />
          <p className='form__error form__error-text'>Что-то пошло не так...</p>
        </div>
      </Form>
    </main>
  )
}

export default Register
