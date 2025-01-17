import { Service } from '../types/service';
import { useLanguage } from '../contexts/LanguageContext';

export const getServices = (language: 'ja' | 'zh'): Service[] => [
  {
    id: '1',
    name: language === 'ja' ? 'フェイシャルエステ' : '面部护理',
    description: language === 'ja' 
      ? '肌質改善と若々しい肌へ導くプレミアムフェイシャルケア'
      : '改善肤质，打造年轻肌肤的高级面部护理',
    duration: language === 'ja' ? '60分' : '60分钟',
    price: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
    fullDescription: language === 'ja'
      ? '当サロン自慢のフェイシャルエステは、お客様の肌状態に合わせてカスタマイズされた贅沢なトリートメントです。クレンジングから始まり、専門のセラピストによる丁寧なマッサージ、美容成分たっぷりのパックまで、トータルケアで肌本来の輝きを取り戻します。'
      : '我们引以为豪的面部护理是根据客户的肌肤状况定制的奢华护理。从清洁开始，通过专业理疗师细致的按摩，再到富含美容成分的面膜，全方位护理让肌肤重现光彩。',
    benefits: language === 'ja'
      ? [
          '肌のくすみ改善',
          'きめの細かい引き締まった肌へ',
          'リフトアップ効果',
          '美容成分の浸透促進'
        ]
      : [
          '改善肌肤暗沉',
          '细腻紧致的肌肤',
          '提拉效果',
          '促进美容成分吸收'
        ],
    includes: language === 'ja'
      ? [
          'クレンジング',
          '肌分析',
          'フェイシャルマッサージ',
          '美容液パック',
          'お仕上げケア'
        ]
      : [
          '清洁',
          '肌肤分析',
          '面部按摩',
          '精华面膜',
          '收尾护理'
        ]
  },
  {
    id: '2',
    name: language === 'ja' ? 'アロマボディマッサージ' : '芳香精油按摩',
    description: language === 'ja'
      ? '心身の疲れを癒す贅沢な全身マッサージ'
      : '舒缓身心疲劳的奢华全身按摩',
    duration: language === 'ja' ? '90分' : '90分钟',
    price: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    fullDescription: language === 'ja'
      ? '厳選された天然アロマオイルを使用し、全身の疲れを癒す至福のボディマッサージ。深い筋肉へのアプローチと、心地よい香りで心身ともにリラックスできます。日々の疲れを癒し、心身のバランスを整えます。'
      : '使用精选天然香薰精油，提供舒缓全身疲劳的至福按摩。通过深层肌肉按摩和怡人香气，让身心完全放松。缓解日常疲劳，调节身心平衡。',
    benefits: language === 'ja'
      ? [
          '筋肉の疲労回復',
          'ストレス解消',
          '血行促進',
          '睡眠の質向上'
        ]
      : [
          '恢复肌肉疲劳',
          '缓解压力',
          '促进血液循环',
          '提高睡眠质量'
        ],
    includes: language === 'ja'
      ? [
          'カウンセリング',
          'アロマオイル選び',
          '全身マッサージ',
          'ヘッドマッサージ',
          'リフレッシュメント'
        ]
      : [
          '咨询',
          '精油选择',
          '全身按摩',
          '头部按摩',
          '茶点'
        ]
  },
  {
    id: '3',
    name: language === 'ja' ? 'ホットストーン療法' : '热石疗法',
    description: language === 'ja'
      ? '温めた石を使用した究極のリラクゼーション'
      : '使用温热石头的终极放松体验',
    duration: language === 'ja' ? '75分' : '75分钟',
    price: 13000,
    imageUrl: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
    fullDescription: language === 'ja'
      ? '溶岩石を使用した伝統的なホットストーン療法。温めた石の心地よい温かさと重みが、深い筋肉の緊張をほぐし、全身をリラックスさせます。自然の力を活かした究極のリラクゼーションをご体験ください。'
      : '使用火山石的传统热石疗法。温热石头舒适的温度和重量可以缓解深层肌肉紧张，让全身放松。体验利用自然力量的终极放松。',
    benefits: language === 'ja'
      ? [
          '深部の筋肉緊張緩和',
          '体の芯からの温まり',
          'デトックス効果',
          '深いリラクゼーション'
        ]
      : [
          '缓解深层肌肉紧张',
          '由内而外温暖身体',
          '排毒效果',
          '深度放松'
        ],
    includes: language === 'ja'
      ? [
          'カウンセリング',
          'ホットストーンマッサージ',
          'オイルトリートメント',
          'リラクゼーションタイム'
        ]
      : [
          '咨询',
          '热石按摩',
          '精油护理',
          '放松时间'
        ]
  },
  {
    id: '4',
    name: language === 'ja' ? '美容カウンセリング' : '美容咨询',
    description: language === 'ja'
      ? 'お肌の状態を分析し、最適なケアプランをご提案'
      : '分析肌肤状态，提供最佳护理方案',
    duration: language === 'ja' ? '30分' : '30分钟',
    price: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80',
    fullDescription: language === 'ja'
      ? '専門のカウンセラーがお客様の肌状態を詳しく分析し、最適なスキンケアプランをご提案いたします。お肌の悩みや生活習慣をお伺いしながら、長期的な美容目標の達成をサポートします。'
      : '专业顾问将详细分析您的肌肤状况，为您推荐最适合的护理方案。在了解您的肌肤问题和生活习惯的同时，帮助您实现长期美容目标。',
    benefits: language === 'ja'
      ? [
          '専門家による肌分析',
          'カスタマイズされたケアプラン',
          'スキンケアアドバイス',
          '継続的なサポート'
        ]
      : [
          '专家肌肤分析',
          '定制护理方案',
          '护肤建议',
          '持续支持'
        ],
    includes: language === 'ja'
      ? [
          '肌状態チェック',
          'カウンセリング',
          'ケアプラン提案',
          'ホームケアアドバイス'
        ]
      : [
          '肌肤状态检查',
          '咨询',
          '护理方案建议',
          '家庭护理建议'
        ]
  }
];