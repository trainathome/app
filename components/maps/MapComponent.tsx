// components/maps/MapComponent.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Region,
} from 'react-native-maps';
import { MapPin } from '~/lib/icons';
import { useTheme } from '~/hooks/useTheme';
import mapStylesLight from '@/utils/mapStylesLight';
import mapStylesDark from '@/utils/mapStylesDark';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
  showMarker?: boolean;
}

export function MapComponent({
  latitude,
  longitude,
  latitudeDelta = 0.005,
  longitudeDelta = 0.005,
  showMarker = true,
}: MapComponentProps) {
  const { isDark } = useTheme();

  const [mapRegion, setMapRegion] = useState<Region>({
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  });

  useEffect(() => {
    setMapRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    });
  }, [latitude, longitude, latitudeDelta, longitudeDelta]);

  const mapProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <>
      <MapView
        provider={mapProvider}
        style={StyleSheet.absoluteFillObject}
        region={mapRegion}
        onRegionChangeComplete={(newRegion) => {
          console.log('Map region updated:', newRegion);
        }}
        customMapStyle={isDark ? mapStylesDark : mapStylesLight}
        scrollEnabled={false}
        zoomEnabled={false}
      >
        {showMarker && (
          <Marker coordinate={{ latitude, longitude }}>
            <MapPin size={30} />
          </Marker>
        )}
      </MapView>
    </>
  );
}
