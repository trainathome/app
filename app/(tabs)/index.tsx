import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { ActivityCard } from '@/components/ActivityCard';
import { InfoCard } from '@/components/InfoCard';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View className='w-full gap-y-4 items-center p-4'>
        <View className='w-full flex-row justify-between items-center'>
          <Text className='text-2xl font-bold'>Actividades disponibles</Text>
          <ThemeToggle />
        </View>
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
