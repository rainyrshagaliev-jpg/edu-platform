import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="Лектор" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>
          <button className="btn-link" onClick={() => setCurrentPage('lecturers')}>
            НАЙТИ ЛЕКТОРА
          </button>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">О нас</h2>
        <p className="about-text">
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора,
          бронирования и организации лекций, помогая находить экспертов, которые не просто
          делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </section>
    </div>
  );
};

export default Home;