// components/maps/MapContainer.tsx
import React, { memo } from 'react';
import { Dimensions, StyleSheet, Platform } from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
} from 'react-native-maps';

interface MarkerData {
  id: string;
  title: string;
  description?: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  customIcon?: any; // Puedes definir un tipo más estricto según tu uso (por ejemplo, ImageSourcePropType)
}

interface MapContainerProps {
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  markers: MarkerData[];
  customMapStyle?: any;
  onMarkerPress?: (marker: MarkerData) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({
  initialRegion,
  markers,
  customMapStyle = [],
  onMarkerPress,
}) => {
  // Seleccionar el proveedor de mapas en función de la plataforma
  const mapProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <MapView
      provider={mapProvider}
      style={styles.map}
      customMapStyle={Platform.OS === 'android' ? customMapStyle : []}
      // Puedes definir estilos específicos para Android
      initialRegion={initialRegion}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
          description={marker.description}
          onPress={() => onMarkerPress && onMarkerPress(marker)}
          image={marker.customIcon}
          // Si quieres un ícono personalizado
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

// Utilizar React.memo para evitar renders innecesarios
export default memo(MapContainer);
