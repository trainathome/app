import { create } from 'zustand';
import i18n from '../localization';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: i18n.locale,
  setLanguage: (language: string) => {
    i18n.locale = language;
    set({ currentLanguage: language });
  },
}));

export const useLanguage = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return {
    t: (key: string) => i18n.t(key),
    currentLanguage,
    setLanguage,
  };
};
