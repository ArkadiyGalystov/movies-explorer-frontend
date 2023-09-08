import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import './PageNotFound.css'

function NotFoundError() {
  const navigate = useNavigate()
  const navigateBack = () => navigate(-1)

  return (
    <section className='pagenotfound'>
      <h1 className='pagenotfound__title'>404</h1>
      <p className='pagenotfound__subtitle'>Страница не найдена</p>
      <Link onClick={navigateBack} className='pagenotfound__link'>Назад</Link>
    </section>
  )
}

export default NotFoundError