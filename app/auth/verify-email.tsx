import { BackButton } from '@/components/BackButton';
import { Text } from '@/components/Themed';
import { Button, Input } from '@/components/ui';
import { useLanguage } from '@/hooks';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

export default function VerifyEmailScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const { t } = useLanguage();

  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [canResend, setCanResend] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(30);
  const [loading, setLoading] = useState(false);

  // Cuenta atrás para reenviar código
  useEffect(() => {
    const timer = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerifyCode = async () => {
    if (!email) {
      Alert.alert('Error', t('auth.errorGeneric'));
      return;
    }

    if (!code.trim() || code.trim().length < 6) {
      setCodeError(t('auth.invalidCode'));
      return;
    }

    setCodeError('');
    setLoading(true);

    // Simular verificación del código
    // TODO: el timeOut vendrá dado por lo que tarde el backend en verificar el código
    setTimeout(() => {
      setLoading(false);

      // TODO: sacar de la base de datos si es nuevo o no
      const isNewUser = true;

      if (isNewUser) {
        router.replace({
          pathname: '/auth/register',
        });
      } else {
        router.replace('/(tabs)');
      }
    }, 1500);
  };

  const handleResendCode = async () => {
    if (!email || !canResend) return;

    Alert.alert(t('auth.codeResentTitle'), t('auth.codeResent'));
    setCanResend(false);
    setResendCountdown(30);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className='flex-1'
    >
      <View className='flex-1 px-6 py-8'>
        <View className='flex-row items-center mb-8'>
          <BackButton onPress={handleGoBack} />
        </View>

        <View className='flex-1'>
          <View className='items-center mb-8'>
            <Text className='text-lg text-center mb-4'>
              {t('auth.verificationMessage')}
            </Text>
            <Text className='text-lg font-semibold text-center mb-8'>
              {email}
            </Text>
          </View>

          <View className='mb-8'>
            <Input
              placeholder={t('auth.codePlaceholder')}
              value={code}
              onChangeText={(text) => {
                // He considerado solo números, máximo 6 dígitos
                const numericText = text.replace(/[^0-9]/g, '').slice(0, 6);
                setCode(numericText);
                if (codeError) setCodeError('');
              }}
              keyboardType='numeric'
              maxLength={6}
              autoFocus
              className={`w-full text-center text-xl tracking-widest ${
                codeError ? 'border-red-500' : ''
              }`}
            />
            {codeError ? (
              <Text className='text-red-500 text-sm mt-2 text-center'>
                {codeError}
              </Text>
            ) : null}
          </View>

          <Button
            onPress={handleVerifyCode}
            disabled={loading || code.length < 6}
            className='w-full bg-white border border-gray-300 dark:bg-black rounded-xl h-12 mb-6'
          >
            <Text className='text-black dark:text-white font-semibold'>
              {loading ? t('auth.verifying') : t('auth.continueButton')}
            </Text>
          </Button>

          <View className='items-center'>
            <TouchableOpacity
              onPress={handleResendCode}
              disabled={!canResend}
              className={`p-2 ${!canResend ? 'opacity-50' : ''}`}
            >
              <Text className='text-gray-600 dark:text-gray-400'>
                {canResend
                  ? t('auth.resendCode')
                  : `${t('auth.resendCode')} (${resendCountdown}s)`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
