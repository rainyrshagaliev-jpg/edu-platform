import React from 'react';
import { partnersData } from '../data/mockData';

const Partners = () => {
  return (
    <div className="partners-page">
      <h1 className="page-title">Партнеры</h1>
      <div className="partners-grid">
        {partnersData.map(partner => {
          
          // Прописываем ссылки напрямую для каждого партнера
          let siteLink = "#"; // По умолчанию пустая ссылка
          if (partner.name === 'ICL') {
            siteLink = 'https://www.icl.ru/';
          } else if (partner.name === 'Татнефть') {
            siteLink = 'https://www.tatneft.ru/';
          }

          return (
            <a 
              key={partner.id} 
              href={siteLink} /* <-- Вставляем сюда проверенную ссылку */
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-link"
            >
              <div className="partner-card">
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;