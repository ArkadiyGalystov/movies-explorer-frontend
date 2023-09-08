import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='aboutProject' id='aboutproject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__container'>
        <div className='aboutProject__content'>
          <h3 className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProject__content'>
          <h3 className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProject__timeline'>
        <div className='aboutProject__week-one'>
          <h4 className='aboutProject__timeline-title aboutProject__timeline-title_backend'>1 неделя</h4>
          <p className='aboutProject__timeline-text'>Back-end</p>
        </div>

        <div className='aboutProject__week-four'>
          <h4 className='aboutProject__timeline-title aboutProject__timeline-title_frontend'>4 недели</h4>
          <p className='aboutProject__timeline-text'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
