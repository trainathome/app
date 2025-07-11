import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

import { BackButton } from '@/components/BackButton';
import { Text, View } from '@/components/Themed';
import { Button, Card, CardContent, Input } from '@/components/ui';

export default function ProfileSettingsScreen() {
  const router = useRouter();
  const [name, setName] = useState('Miguel Ángel'); // TODO: Get name from backend
  const [email, setEmail] = useState('email@com'); // TODO: Get email from backend
  const [originalEmail] = useState('email@com'); // TODO: Get original email from backend (same as email for the first time)

  const handleSave = () => {
    // Check if email was changed
    if (email !== originalEmail) {
      // Show email change confirmation modal (P3)
      Alert.alert(
        'Cambiar correo',
        'Para cambiar el correo, debe ser validado con el enlace que recibirá por email.',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Continuar',
            onPress: () => {
              // Here would be the logic to save the profile and send verification email
              console.log('Profile saved with email change');
              Alert.alert(
                'Correo enviado',
                'Se ha enviado un enlace de verificación a tu nuevo correo electrónico.',
                [
                  {
                    text: 'Entendido',
                    onPress: () => router.back(),
                  },
                ]
              );
            },
          },
        ]
      );
    } else {
      // Save without email change (F1)
      console.log('Profile saved without email change');
      Alert.alert(
        'Perfil actualizado',
        'Los cambios se han guardado correctamente.',
        [
          {
            text: 'Entendido',
            onPress: () => router.back(),
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View className='w-full flex-row items-center justify-center p-4 relative'>
        <View className='absolute left-4'>
          <BackButton />
        </View>
        <Text className='text-xl font-bold'>Ajustes</Text>
      </View>

      <View className='w-full p-4 mt-8'>
        <Card>
          <CardContent className='p-4 gap-y-4'>
            <View>
              <Text className='text-base font-medium mb-2'>Nombre</Text>
              <Input
                value={name}
                onChangeText={setName}
                placeholder='Nombre'
                className='w-full border-2 border-black dark:text-white dark:border-white placeholder:text-gray-500'
              />
            </View>

            <View>
              <Text className='text-base font-medium mb-2'>Email</Text>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder='email@com'
                keyboardType='email-address'
                autoCapitalize='none'
                className='w-full border-2 border-black dark:text-white dark:border-white placeholder:text-gray-500'
              />
            </View>
          </CardContent>
        </Card>
      </View>

      <View className='w-full p-4 mt-auto'>
        <Button
          onPress={handleSave}
          className='w-full rounded-2xl h-12 border border-black dark:border-white'
        >
          <Text className='uppercase font-semibold'>Guardar cambios</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
