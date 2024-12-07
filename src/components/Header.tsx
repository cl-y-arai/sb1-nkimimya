import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const { language } = useLanguage();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Sparkles className="h-8 w-8 text-pink-500" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Beauty Essence</h1>
          </Link>
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-pink-500">
                    {translations.services[language]}
                  </Link>
                </li>
                <li>
                  <Link to="/reservations" className="text-gray-600 hover:text-pink-500">
                    {translations.reservationList[language]}
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-pink-500">
                    {translations.contact[language]}
                  </a>
                </li>
              </ul>
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}