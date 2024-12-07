import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export function Hero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
          alt="Spa background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {translations.beautyAndRelaxation[language]}
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          {translations.welcomeMessage[language]}
        </p>
        <div className="mt-10">
          <a
            href="#services"
            className="inline-block bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-600 rounded-md transition-colors"
          >
            {translations.viewMenu[language]}
          </a>
        </div>
      </div>
    </div>
  );
}