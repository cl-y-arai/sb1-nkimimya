import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-5 h-5 text-gray-500" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'ja' | 'zh')}
        className="bg-transparent text-gray-600 hover:text-pink-500 focus:outline-none cursor-pointer"
      >
        <option value="ja">日本語</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}