import React from 'react-router-dom';
import './AboutMe.css';
import studentPic from '../../../images/img__student.jpg';

function AboutMe() {
  return (
    <section className='aboutMe' id='aboutme'>
      <h2 className='aboutMe__title'>Студент</h2>
      <div className='aboutMe__profile'>
        <div className='aboutMe__content'>
          <h3 className='aboutMe__name'>Аркадий</h3>
          <p className='aboutMe__prof'>Фронтенд-разработчик, 30 года</p>
          <p className='aboutMe__text'>
            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст
          </p>
          <a className='aboutMe__link' href='https://github.com' target='_blank' rel='noreferrer'>Github</a>
        </div>
        <img className='aboutMe__image' src={studentPic} alt='Аватар' />
      </div>
    </section>
  );
}

export default AboutMe;