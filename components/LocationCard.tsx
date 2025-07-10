import { View } from 'react-native';
import { Text } from '~/components/Themed';
import { Card, CardContent, CardHeader } from '~/components/ui';
import { LocationCardProps } from '~/interfaces';
import { MapPin } from '~/lib/icons';

export function LocationCard({
  location,
  address,
  city,
}: Readonly<LocationCardProps>) {
  return (
    <Card className='w-full max-w-xl self-center mb-4'>
      <CardHeader>
        <View className='flex flex-row items-center gap-x-2'>
          <MapPin size={18} />
          <Text className='font-bold'>Lugar</Text>
        </View>
      </CardHeader>
      <CardContent className='flex flex-row justify-between items-center'>
        <View className='flex flex-col gap-y-[2px]'>
          <Text className='font-bold'>{location}</Text>
          <Text>{address}</Text>
          <Text>{city}</Text>
        </View>
        <Text>[Mapa aquí]</Text>
      </CardContent>
    </Card>
  );
}
