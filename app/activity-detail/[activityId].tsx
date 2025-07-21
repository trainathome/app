import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { useTheme } from '~/hooks/useTheme';
import { Sport, Team } from '~/interfaces';
import { ActivityCard } from '../../components/ActivityCard';
import { BackButton } from '../../components/BackButton';
import { InfoCard } from '../../components/InfoCard';
import { LocationCard } from '../../components/LocationCard';
import { ParticipantsCard } from '../../components/ParticipantsCard';
import { SettingsButton } from '../../components/SettingsButton';
import { ShareButton } from '../../components/ShareButton';
import { Text } from '../../components/Themed';
import { Button } from '../../components/ui';
import { MapComponent } from '../../components/maps/MapComponent';

export default function ActivityDetailScreen() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();
  const { isDark } = useTheme();

  const mainMapLocation = {
    latitude: 37.1431055,
    longitude: -3.6145999,
    name: 'Estadio Nuevo Los Cármenes',
    address:
      'C. Pintor Manuel Maldonado, s/n, Zaidín, 18007 GranadaC. Pintor Manuel Maldonado, s/n, Zaidín, 18007 GranadaC. Pintor Manuel Maldonado, s/n, Zaidín, 18007 GranadaC. Pintor Manuel Maldonado, s/n, Zaidín, 18007 Granada',
    cityState: 'Granada, Andalucía',
  };

  const teams: Team[] = [
    {
      id: '1',
      name: 'Equipo 1',
      participants: [
        {
          id: '111',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '112',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '113',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '114',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '115',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '116',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '117',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
      ],
      maxParticipants: 11,
      minParticipants: 10,
    },
    {
      id: '2',
      name: 'Equipo 2',
      participants: [
        {
          id: '118',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
        {
          id: '119',
          name: 'Miguel Ángel',
          avatarUrl: 'https://github.com/mianfg.png',
        },
      ],
      maxParticipants: 11,
      minParticipants: 10,
    },
  ];

  return (
    <View className='flex-1'>
      <ScrollView className='flex-1'>
        <View className='flex-1 items-center justify-center'>
          {/* Contenedor mapa y botones */}
          <View className='flex-1 w-full absolute top-0 left-0 right-0 bottom-0 z-10 h-52'>
            {/* Botones absolutos sobre el mapa */}
            <View className='absolute top-6 left-4 right-4 z-20 flex-row justify-between'>
              <BackButton />
              <View className='flex-row gap-x-2'>
                <ShareButton />
                <SettingsButton onPress={() => {}} />
              </View>
            </View>
            {/* Mapa de fondo */}
            <View className='bg-gray-500 dark:bg-gray-900 w-full h-full items-center justify-center'>
              <MapComponent
                latitude={mainMapLocation.latitude}
                longitude={mainMapLocation.longitude}
                latitudeDelta={0.002}
                longitudeDelta={0.002}
                showMarker={true}
              />
            </View>
          </View>

          <View className='w-full px-4 mt-40 z-20 pb-24'>
            {/* Card principal */}
            <View className='w-full max-w-xl self-center mb-4'>
              <ActivityCard
                activityType={Sport.FOOTBALL}
                activitySubtype='Fútbol 7'
                date='19 dic'
                time='20:00'
                duration='90 min'
                level='Intermedio'
                organizer={{
                  name: 'Miguel Ángel',
                  username: 'mianfg',
                  avatarUrl: 'https://github.com/mianfg.png',
                }}
              />
            </View>
            {/* Información */}
            <View className='w-full max-w-xl self-center mb-4'>
              <InfoCard
                title='Información'
                description='Vamos a hacer una pachanga entre amigos porque uno de nosotros ha cambiado de opinión y ahora no queremos jugar al fútbol. Vamos a hacer una pachanga entre amigos porque uno de nosotros ha cambiado de opinión y ahora no queremos jugar al fútbol. Vamos a hacer una pachanga entre amigos porque uno de nosotros ha cambiado de opinión y ahora no queremos jugar al fútbol.'
              />
            </View>
            {/* Lugar */}
            <LocationCard location={mainMapLocation} />
            {/* Participantes */}
            <ParticipantsCard teams={teams} />
          </View>
        </View>
      </ScrollView>

      {/* Botón Participar - Sticky */}
      <View className='absolute bottom-0 left-0 right-0 p-4 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark'>
        <View className='w-full max-w-xl rounded-lg self-center dark:bg-white bg-black'>
          <Button className='w-full'>
            <Text color={isDark ? 'black' : 'white'}>Participar</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
