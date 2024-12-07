import React from 'react';
import { ServiceCard } from './ServiceCard';
import { getServices } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export function ServiceList() {
  const { language } = useLanguage();
  const services = getServices(language);

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {translations.serviceMenu[language]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}