import React from 'react';
import { lecturersData } from '../data/mockData';

const Lecturers = () => {
  return (
    <div className="lecturers-page">
      <h1 className="page-title">Лекторы</h1>
      <div className="lecturers-list">
        {lecturersData.map(lecturer => (
          <div key={lecturer.id} className="lecturer-card-horizontal">
            
            {/* Левая колонка: Фото и синяя полоса (как на макете) */}
            <div className="lecturer-photo-wrapper">
              <img src={lecturer.photo} alt={lecturer.name} className="lecturer-photo" />
              <div className="photo-underline"></div>
            </div>

            {/* Правая колонка: Информация */}
            <div className="lecturer-info">
              <h2 className="lecturer-name">{lecturer.name}</h2>
              
              <div className="lecturer-details">
                <p><strong>Образование:</strong> {lecturer.education}</p>
                <p><strong>Стаж:</strong> {lecturer.experience}</p>
                <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
              </div>

              <div className="subjects-list">
                <h4>Преподаваемые дисциплины:</h4>
                {lecturer.subjects.map((subject, index) => (
                  <div key={index} className="subject-item">
                    <p className="subject-title">{subject.title}</p>
                    <ul className="topics-list">
                      {subject.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Блок с тарифами */}
              <div className="custom-block">
                <h4>Тарифы:</h4>
                <ul>
                  {lecturer.tariffs.map((tariff, index) => (
                    <li key={index}>{tariff}</li>
                  ))}
                </ul>
                <button className="btn-book">Записаться</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecturers;