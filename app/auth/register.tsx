import { BackButton } from '@/components/BackButton';
import { Text } from '@/components/Themed';
import { Button, Input } from '@/components/ui';
import { useLanguage } from '@/hooks';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCompleteRegistration = async () => {
    if (!name.trim()) {
      setNameError(t('auth.nameRequired'));
      return;
    }

    setNameError('');
    setLoading(true);

    // Simular creación de cuenta
    // TODO: reemplazar por servicio supabase
    setTimeout(() => {
      setLoading(false);

      router.replace('/(tabs)');
    }, 1000);
  };

  const handleGoBack = () => {
    router.replace('/auth/sign-in');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View className='flex-1 px-6 py-8'>
          <View className='flex-row items-center mb-8'>
            <BackButton onPress={handleGoBack} />
          </View>

          <View className='flex-1'>
            <View className='items-center mb-12'>
              <Text className='text-3xl font-bold text-center mb-4'>
                {t('auth.registrationForm')}
              </Text>
            </View>

            <View className='mb-8'>
              <Input
                placeholder={t('auth.namePlaceholder')}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (nameError) setNameError('');
                }}
                autoFocus
                autoCapitalize='words'
                className={`w-full ${nameError ? 'border-red-500' : ''}`}
              />
              {nameError ? (
                <Text className='text-red-500 text-sm mt-2'>{nameError}</Text>
              ) : null}
            </View>

            <Button
              onPress={handleCompleteRegistration}
              disabled={loading || !name.trim()}
              className='w-full bg-white border border-gray-300 dark:bg-black rounded-xl h-12'
            >
              <Text className='text-black dark:text-white font-semibold'>
                {loading
                  ? t('auth.creatingAccount')
                  : t('auth.completeRegistration')}
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
