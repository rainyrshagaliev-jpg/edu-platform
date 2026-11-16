import React from 'react';
import { lecturersData } from '../data/mockData';

const Lecturers = () => {
  return (
    <div className="lecturers-page">
      <h1 className="page-title">Лекторы</h1>
      <div className="lecturers-list">
        {lecturersData.map(lecturer => (
          <div key={lecturer.id} className="lecturer-card-horizontal">
            <div className="lecturer-photo-wrapper">
              {lecturer.photo ? (
                <img src={lecturer.photo} alt={lecturer.name} className="lecturer-photo" />
              ) : (
                <div className="photo-placeholder">
                  <span>место для фото<br/>преподавателя</span>
                </div>
              )}
              <div className="photo-underline"></div>
            </div>

            <div className="lecturer-info">
              <h2 className="lecturer-name">{lecturer.name}</h2>
              <p className="lecturer-details">
                <strong>Образование:</strong> {lecturer.education}<br/>
                <strong>Стаж:</strong> {lecturer.experience}<br/>
                <strong>Учёная степень:</strong> {lecturer.degree}
              </p>

              <div className="subjects-list">
                <h4>Преподаваемые дисциплины:</h4>
                {lecturer.subjects.map((subj, idx) => (
                  <div key={idx} className="subject-item">
                    <p className="subject-title">{subj.title}</p>
                    <ul className="topics-list">
                      {subj.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="custom-block">
                <h4>Тарифы:</h4>
                <ul>
                  {lecturer.tariffs.map((tariff, idx) => (
                    <li key={idx}>{tariff}</li>
                  ))}
                </ul>
                <button className="btn-book">Записаться на занятие</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecturers;