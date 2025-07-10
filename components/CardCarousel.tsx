import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from '~/components/Themed';
import type { BaseCardItem, CardCarouselProps } from '~/interfaces';

export function CardCarousel<T extends BaseCardItem>({
  title,
  items,
  renderCard,
  onItemPress,
  showTitle = true,
  horizontal = true,
  showScrollIndicator = false,
  contentPadding = 8,
  itemSpacing = 0,
}: Readonly<CardCarouselProps<T>>) {
  return (
    <View className='mb-6'>
      {showTitle && (
        <Text className='text-lg font-bold mb-4 px-4'>{title}</Text>
      )}
      <ScrollView
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showScrollIndicator}
        showsVerticalScrollIndicator={!horizontal && showScrollIndicator}
        contentContainerStyle={{
          paddingHorizontal: contentPadding,
          ...(horizontal ? {} : { paddingVertical: contentPadding }),
        }}
        className={horizontal ? 'flex-row' : 'flex-col'}
      >
        {items.map((item, index) => {
          const cardElement = renderCard(item, index);

          // If the card already has an onPress, combine it with our onItemPress
          const originalOnPress = cardElement.props.onPress;
          const combinedOnPress = () => {
            originalOnPress?.();
            onItemPress?.(item, index);
          };

          return (
            <View
              key={item.id}
              style={{
                marginRight:
                  horizontal && index < items.length - 1 ? itemSpacing : 0,
                marginBottom:
                  !horizontal && index < items.length - 1 ? itemSpacing : 0,
              }}
            >
              {React.cloneElement(cardElement, {
                onPress: onItemPress ? combinedOnPress : originalOnPress,
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
