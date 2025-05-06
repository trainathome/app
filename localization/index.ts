import { I18n } from 'i18n-js';
import en from './en.json';
import es from './es.json';
import { getLocales } from 'expo-localization';

const i18n = new I18n({
  en,
  es,
});

const deviceLanguage = getLocales()[0]?.languageCode;
i18n.locale = deviceLanguage ?? 'es';

i18n.enableFallback = true;
i18n.defaultLocale = 'es';

export default i18n;
