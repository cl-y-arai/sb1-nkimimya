import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types/service';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={service.imageUrl} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-pink-600">¥{service.price.toLocaleString()}</span>
            <span className="ml-2 text-gray-500">/ {service.duration}</span>
          </div>
          <Link
            to={`/service/${service.id}`}
            className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            {translations.treatmentDetails[language]}
          </Link>
        </div>
      </div>
    </div>
  );
}