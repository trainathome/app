import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
} from '@/components/ui';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View className='w-full items-center p-4'>
        <Avatar className='h-24 w-24 mb-4' alt='Imagen de perfil'>
          <AvatarImage source={{ uri: 'https://github.com/mianfg.png' }} />
          <AvatarFallback>
            <Text>MA</Text>
          </AvatarFallback>
        </Avatar>
        <Text className='text-xl font-bold'>Miguel Ángel</Text>
        <Text className='text-gray-500'>@mianfg</Text>
      </View>
      <View className='w-full p-4'>
        <Card>
          <CardContent className='p-4'>
            <Text className='text-lg font-semibold mb-2'>Mis actividades</Text>
            <Text className='text-gray-500'>
              No tienes actividades programadas
            </Text>
          </CardContent>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
