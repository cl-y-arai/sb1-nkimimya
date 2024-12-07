import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServices } from '../data/services';
import { ArrowLeft, Clock, Check } from 'lucide-react';
import { Notification } from './Notification';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export function ServiceDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const services = getServices(language);
  const service = services.find(s => s.id === id);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p>{language === 'ja' ? 'サービスが見つかりませんでした。' : '未找到服务。'}</p>
        <Link to="/" className="text-pink-500 hover:text-pink-600">
          {translations.backToTop[language]}
        </Link>
      </div>
    );
  }

  const handleReservation = () => {
    setIsNotificationOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {translations.backToTop[language]}
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={service.imageUrl} 
            alt={service.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h1>
          <div className="flex items-center mb-4">
            <Clock className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600">{service.duration}</span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-2xl font-bold text-pink-600">
              ¥{service.price.toLocaleString()}
            </span>
          </div>
          
          <p className="text-gray-600 mb-8">{service.fullDescription}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {translations.expectedEffects[language]}
            </h2>
            <ul className="grid grid-cols-1 gap-2">
              {service.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-pink-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {translations.treatmentDetails[language]}
            </h2>
            <ul className="grid grid-cols-1 gap-2">
              {service.includes?.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-pink-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={handleReservation}
            className="mt-8 w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors"
          >
            {translations.reserve[language]}
          </button>
        </div>
      </div>

      <Notification
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        message={translations.reservationConfirmation[language]}
      />
    </div>
  );
}