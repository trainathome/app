import { Pressable } from 'react-native';
import { Text } from './Themed';
import { useLanguage } from '~/hooks';

export const LanguageToggle = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'en' ? 'es' : 'en');
  };

  return (
    <Pressable
      onPress={toggleLanguage}
      className='flex-row items-center gap-x-2 px-4 py-2 rounded-lg'
    >
      <Text className='text-white font-medium'>
        {currentLanguage === 'en' ? 'EN' : 'ES'}
      </Text>
    </Pressable>
  );
};
