export type Language = 'ja' | 'zh';

export interface Translations {
  [key: string]: {
    ja: string;
    zh: string;
  };
}