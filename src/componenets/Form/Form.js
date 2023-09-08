import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import './Form.css'

function Form (props) {
  const { header, children, submit, text, link, path } = props

  return (
    <section className='form'>
      <div className='form__container'>
        <Link to='/' className='form__link_header'>
          <img className='form__logo' src={logo} alt='Лого'></img>
        </Link>
        <h2 className='form__name'>{header}</h2>
        <form className='form__content'>
          <div className='form__inputs'>{children}</div>
          <button type='submit' className='form__button' disabled>{submit}</button>
        </form>
        <p className='form__footer'>{text}
          <Link to={path} className='form__link_footer'>{link}</Link>
        </p>
      </div>
    </section>
  )
}

export default Form
