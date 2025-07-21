import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { SettingsButton } from '@/components/SettingsButton';
import { Text, View } from '@/components/Themed';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';

export default function ProfileScreen() {
  const router = useRouter();

  const handleSettingsPress = () => {
    router.push('/profile-settings');
  };

  return (
    <View style={styles.container}>
      <View className='w-full flex-row justify-end p-4'>
        <SettingsButton onPress={handleSettingsPress} />
      </View>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
