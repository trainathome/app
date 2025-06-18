// components/LocationCard.tsx
import React, { useState, useCallback } from 'react';
import { StyleSheet, View as RNView, TouchableOpacity } from 'react-native';
import { View, Text } from '~/components/Themed';
import { MapPinTitle, MapPin } from '~/lib/icons';
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui';
import { MapComponent } from './maps/MapComponent'; // Asegúrate de que la ruta sea correcta

interface LocationCardProps {
  location: {
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    cityState: string;
  };
}

export function LocationCard({ location }: LocationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textContainerWidth, setTextContainerWidth] = useState(0);
  const [overflowStatus, setOverflowStatus] = useState({
    name: false,
    address: false,
    cityState: false,
  });

  const showReadMoreButton = Object.values(overflowStatus).some(
    (status) => status === true
  );

  const handleTextLayout = useCallback(
    (key: keyof typeof overflowStatus, event: any) => {
      const needsTruncation = event.nativeEvent.lines.length > 2;
      if (overflowStatus[key] !== needsTruncation) {
        setOverflowStatus((prev) => ({ ...prev, [key]: needsTruncation }));
      }
    },
    [overflowStatus]
  );

  return (
    <Card className='w-full max-w-xl self-center mb-4'>
      <CardHeader>
        <CardTitle>
          <View className='flex flex-row items-center gap-x-2'>
            <MapPinTitle size={18} />
            <Text className='font-bold'>Lugar</Text>
          </View>
        </CardTitle>
      </CardHeader>

      <CardContent className='flex flex-row items-stretch min-h-[160px] p-2 pt-0 overflow-hidden'>
        <RNView
          className='flex-[3] flex flex-col p-4 pt-0'
          onLayout={(event) =>
            setTextContainerWidth(event.nativeEvent.layout.width)
          }
        >
          {textContainerWidth > 0 && (
            <>
              <View
                style={[styles.hiddenMeasurer, { width: textContainerWidth }]}
              >
                <Text
                  className='text-base font-bold mb-1'
                  onTextLayout={(e) => handleTextLayout('name', e)}
                >
                  {location.name}
                </Text>
                <Text
                  className='text-sm italic text-gray-700 mb-1'
                  onTextLayout={(e) => handleTextLayout('address', e)}
                >
                  {location.address}
                </Text>
                <Text
                  className='text-xs text-gray-500'
                  onTextLayout={(e) => handleTextLayout('cityState', e)}
                >
                  {location.cityState}
                </Text>
              </View>

              <Text
                className='text-base font-bold mb-1'
                numberOfLines={isExpanded ? undefined : 2}
              >
                {location.name}
              </Text>
              <Text
                className='text-sm italic text-gray-700 mb-1'
                numberOfLines={isExpanded ? undefined : 2}
              >
                {location.address}
              </Text>
              <Text
                className='text-xs text-gray-500'
                numberOfLines={isExpanded ? undefined : 2}
              >
                {location.cityState}
              </Text>

              {showReadMoreButton && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  className='self-start mt-4'
                  onPress={() => setIsExpanded((prev) => !prev)}
                >
                  <Text className='text-primary'>
                    {isExpanded ? 'Leer menos' : 'Leer más'}
                  </Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </RNView>

        <View className='flex-[2] p-4 flex justify-start items-center'>
          <View style={styles.mapSquareContainer}>
            <MapComponent
              latitude={location.latitude}
              longitude={location.longitude}
              latitudeDelta={0.001}
              longitudeDelta={0.001}
              showMarker={true}
            />
          </View>
        </View>
      </CardContent>
    </Card>
  );
}

const styles = StyleSheet.create({
  mapSquareContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  hiddenMeasurer: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    zIndex: -1,
  },
});
