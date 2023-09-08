import React from 'react-router-dom'
import Form from '../Form/Form.js'

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
          <input type='email' className='form__input-data' required />
          <p className='form__error'></p>
        </div>

        <div className='form__input'>
          <p className='form__input-password'>Пароль</p>
          <input type='password' className='form__input-data form__input-data_color-error' minLength={3} maxLength={25} required />
          <p className='form__error'></p>
        </div>
      </Form>
    </main>
  )
}

export default Login
