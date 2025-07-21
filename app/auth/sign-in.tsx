import { Text } from '@/components/Themed';
import { Button, Input } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { LogIn } from '@/lib/icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function SignInScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailContinue = async () => {
    // Validar email
    if (!email.trim()) {
      setEmailError(t('auth.invalidEmail'));
      return;
    }

    if (!validateEmail(email.trim())) {
      setEmailError(t('auth.invalidEmail'));
      return;
    }

    setEmailError('');
    setLoading(true);

    // Simular envío de código de verificación
    // TODO - cambiar por servicio supabase
    setTimeout(() => {
      setLoading(false);
      // Navegar a pantalla de verificación
      router.push({
        pathname: '/auth/verify-email',
        params: { email: email.trim() },
      });
    }, 1000);
  };

  const handleSSOContinue = (provider: 'google' | 'apple' | 'facebook') => {
    Alert.alert('SSO', `Continuar con ${provider} - Por implementar`);
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
          {/* Header */}
          <View className='items-center mb-12'>
            <View className='w-16 h-16 border rounded-full items-center justify-center mb-6'>
              <LogIn size={24} />
            </View>
            <Text className='text-3xl font-bold text-center mb-2'>
              {t('auth.signInOrRegister')}
            </Text>
          </View>

          {/* Email */}
          <View className='mb-8'>
            <View className='mb-4'>
              <Input
                placeholder={t('auth.emailPlaceholder')}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (emailError) setEmailError('');
                }}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                className={`w-full ${emailError ? 'border-red-500' : ''}`}
              />
              {emailError ? (
                <Text color='red' className='text-sm mt-1'>
                  {emailError}
                </Text>
              ) : null}
            </View>

            <Button
              onPress={handleEmailContinue}
              disabled={loading}
              className='w-full bg-white border border-gray-300 dark:bg-black rounded-xl h-12'
            >
              <Text className='text-black dark:text-white font-semibold'>
                {loading ? t('auth.sending') : t('auth.continueWithEmail')}
              </Text>
            </Button>
          </View>

          {/* Divider */}
          <View className='items-center mb-8'>
            <View className='w-full h-px bg-gray-200 dark:bg-gray-700' />
          </View>

          {/* SSO */}
          <View className='space-y-3'>
            {/* Google */}
            <Button
              onPress={() => handleSSOContinue('google')}
              disabled={loading}
              className='w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl h-12'
            >
              <Text className='text-black dark:text-white font-semibold'>
                {t('auth.continueWithGoogle')}
              </Text>
            </Button>

            {/* Apple - Solo en iOS */}
            {Platform.OS === 'ios' && (
              <Button
                onPress={() => handleSSOContinue('apple')}
                disabled={loading}
                className='w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-xl h-12'
              >
                <Text className='text-black dark:text-white font-semibold'>
                  {t('auth.continueWithApple')}
                </Text>
              </Button>
            )}

            {/* Facebook */}
            <Button
              onPress={() => handleSSOContinue('facebook')}
              disabled={loading}
              className='w-full bg-blue-500 dark:bg-blue-700 rounded-xl h-12'
            >
              <Text className='text-white font-semibold'>
                {t('auth.continueWithFacebook')}
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
