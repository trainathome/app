import { ActivityCard } from '@/components/ActivityCard';
import { InfoCard } from '@/components/InfoCard';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Text, View } from '@/components/Themed';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';
import {
  ExampleActivityCarousel,
  ExampleCustomCarousel,
} from '~/examples/CardCarousel.examples';
import { Sport } from '~/interfaces';

export default function HomeScreen() {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <ScrollView>
      <View className='gap-y-4 items-center p-4'>
        <View className='w-full flex-row justify-between items-center'>
          <Text className='text-2xl font-bold'>{t('home.title')}</Text>
          <View className='flex-row items-center gap-x-2'>
            <LanguageToggle />
            <ThemeToggle />
          </View>
        </View>
        <Text className='text-lg'>{t('home.description')}</Text>
        <Pressable
          className='w-full md:max-w-sm'
          onPress={() =>
            router.push({
              pathname: '/activity-detail/[activityId]',
              params: { activityId: '1' },
            })
          }
        >
          <ActivityCard
            activityType={Sport.FOOTBALL}
            activitySubtype='Fútbol 7'
            date='19 dic'
            time='12:00'
            duration='90 min'
            level='Intermedio'
            organizer={{
              name: 'Miguel Ángel',
              username: 'mianfg',
              avatarUrl: 'https://github.com/mianfg.png',
            }}
          />
        </Pressable>
        <InfoCard
          className='w-full md:max-w-sm'
          title='Información'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
        />
        <View className='w-full'>
          <ExampleActivityCarousel />
          <ExampleCustomCarousel />
        </View>
      </View>
    </ScrollView>
  );
}
