import React from 'react';
import type { InfoItem } from '~/interfaces';
import { CardCarousel } from './CardCarousel';
import { InfoCard } from './InfoCard';

interface InfoCarouselProps {
  title: string;
  infoItems: InfoItem[];
  onInfoPress?: (infoId: string) => void;
}

export function InfoCarousel({
  title,
  infoItems,
  onInfoPress,
}: Readonly<InfoCarouselProps>) {
  const renderInfoCard = (infoItem: InfoItem) => (
    <InfoCard
      title={infoItem.title}
      description={infoItem.description}
      className={infoItem.className}
    />
  );

  const handleInfoPress = (infoItem: InfoItem) => {
    onInfoPress?.(infoItem.id);
  };

  return (
    <CardCarousel
      title={title}
      items={infoItems}
      renderCard={renderInfoCard}
      onItemPress={handleInfoPress}
      horizontal={false}
      contentPadding={16}
      itemSpacing={12}
    />
  );
}
