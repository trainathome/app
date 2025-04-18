import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ChartNoAxesColumn } from '@/lib/icons/ChartNoAxesColumn';
import { Clock } from '@/lib/icons/Clock';
import { Info } from '@/lib/icons/Info';
import { LogIn } from '@/lib/icons/LogIn';
import { Soccer } from '@/lib/icons/Soccer';
import { Card, CardTitle } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <View className='w-full gap-y-4 items-center'>
        <Card className='w-full max-w-sm' bottomColor='bg-red-500'>
          <View className='flex flex-row'>
            <View className='flex-1 flex flex-row items-center gap-x-2'>
              <Soccer className='h-4 w-4' />
              <View className='flex flex-row items-center'>
                <Text className='font-medium'>Fútbol</Text>
                <Separator orientation='vertical' className='h-4 mx-2' />
                <Text>Fútbol 7</Text>
              </View>
            </View>
            <View>
              <Badge
                variant='secondary'
                className='flex flex-row items-center gap-x-2'
              >
                <LogIn className='h-4 w-4 rotate-90 color-black dark:color-white' />
                <Text className='text-sm uppercase'>ABIERTA</Text>
              </Badge>
            </View>
          </View>
          <Separator orientation='horizontal' className='my-4' />
          <View className='flex flex-row items-center justify-between'>
            <View className='w-[50%] flex flex-row items-center'>
              <View className='flex-1 items-center gap-y-1'>
                <Text className='text-xl'>19 dic</Text>
                <Text>12:00</Text>
              </View>
              <View className='flex-1 items-center gap-y-1'>
                <Avatar
                  alt='Imagen de perfil de Miguel Ángel'
                  className='h-8 w-8'
                >
                  <AvatarImage
                    source={{ uri: 'https://github.com/mianfg.png' }}
                  />
                  <AvatarFallback>
                    <Text>M</Text>
                  </AvatarFallback>
                </Avatar>
                <Text
                  className='text-ellipsis overflow-hidden text-sm'
                  numberOfLines={1}
                >
                  mianfg
                </Text>
              </View>
            </View>
            <Separator orientation='vertical' />
            <View className='w-[35%] gap-y-2'>
              <View className='flex flex-row items-center gap-x-2'>
                <Clock className='color-black dark:color-white h-4 w-4' />
                <Text>90 min</Text>
              </View>
              <View className='flex flex-row items-center gap-x-2'>
                <ChartNoAxesColumn className='color-black dark:color-white h-4 w-4' />
                <Text>Intermedio</Text>
              </View>
            </View>
          </View>
        </Card>
        <Card className='w-full max-w-sm'>
          <CardTitle icon={<Info />}>Información</CardTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
