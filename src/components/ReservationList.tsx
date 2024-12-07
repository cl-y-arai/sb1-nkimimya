import React from 'react';
import { reservations } from '../data/reservations';
import { getServices } from '../data/services';
import { Calendar, Clock, CheckCircle, HourglassIcon, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export function ReservationList() {
  const { language } = useLanguage();
  const services = getServices(language);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <HourglassIcon className="w-4 h-4 mr-1" />
            {translations.pending[language]}
          </span>
        );
      case 'confirmed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-4 h-4 mr-1" />
            {translations.confirmed[language]}
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <CheckCircle2 className="w-4 h-4 mr-1" />
            {translations.completed[language]}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {translations.reservationList[language]}
      </h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {reservations.map((reservation) => {
            const service = services.find(s => s.id === reservation.serviceId);
            if (!service) return null;

            return (
              <li key={reservation.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {service.name}
                        </h3>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {new Date(reservation.date).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'zh-CN')}
                          <Clock className="flex-shrink-0 mx-1.5 h-5 w-5 text-gray-400" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-lg font-semibold text-pink-600">
                        ¥{reservation.price.toLocaleString()}
                      </p>
                      <div className="mt-2">
                        {getStatusBadge(reservation.status)}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}