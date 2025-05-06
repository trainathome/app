import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { ActivityCard } from '@/components/ActivityCard';
import { InfoCard } from '@/components/InfoCard';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';

export default function HomeScreen() {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <View className='w-full gap-y-4 items-center p-4'>
        <View className='w-full flex-row justify-between items-center'>
          <Text className='text-2xl font-bold'>{t('home.title')}</Text>
          <View className='flex-row items-center gap-x-2'>
            <LanguageToggle />
            <ThemeToggle />
          </View>
        </View>
        <Text className='text-lg'>{t('home.description')}</Text>
        <ActivityCard
          activityType='Fútbol'
          activitySubtype='Fútbol 7'
          date='19 dic'
          time='12:00'
          duration='90 min'
          level='Intermedio'
          borderColor='red-500'
          organizer={{
            name: 'Miguel Ángel',
            username: 'mianfg',
            avatarUrl: 'https://github.com/mianfg.png',
          }}
        />
        <InfoCard
          title='Información'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
