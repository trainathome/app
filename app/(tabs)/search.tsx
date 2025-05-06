import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Input } from '@/components/ui';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View className='w-full p-4'>
        <Input placeholder='Buscar actividades...' className='w-full' />
      </View>
      <View className='flex-1 items-center justify-center'>
        <Text className='text-lg text-gray-500'>
          Busca actividades para unirte
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
