import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import { View, Text } from '~/components/Themed';
import { Info, MapPin } from '~/lib/icons';
import { Card, CardHeader, CardTitle } from '~/components/ui';
import customMapStyle from '~/config/mapStyles';

interface LocationCardProps {
  location: {
    latitude: number;
    longitude: number;
  };
}

export function LocationCard({ location }: LocationCardProps) {
  // Define una región inicial para el mini-mapa
  const initialRegion = {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  // Seleccionar el proveedor según la plataforma
  const mapProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>
          <View className='flex flex-row items-center gap-x-2'>
            {/* Puedes seguir usando el componente Info para la cabecera si lo deseas */}

            <Info size={18} />

            <Text>Lugar</Text>
          </View>
        </CardTitle>
      </CardHeader>

      <View style={styles.mapContainer}>
        <MapView
          provider={mapProvider}
          style={styles.map}
          initialRegion={initialRegion}
          customMapStyle={customMapStyle}
          scrollEnabled={false}
          // Vista de preview
          zoomEnabled={false}
        >
          <Marker coordinate={location}>
            <MapPin size={29} />
          </Marker>
        </MapView>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 150, // Altura del mini mapa
    width: '100%',
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
