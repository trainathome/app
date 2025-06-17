import { ReactElement } from 'react';

export interface BaseCardItem {
  readonly id: string;
}

export interface CardCarouselProps<T extends BaseCardItem> {
  readonly title: string;
  readonly items: T[];
  readonly renderCard: (item: T, index: number) => ReactElement;
  readonly onItemPress?: (item: T, index: number) => void;
  readonly showTitle?: boolean;
  readonly horizontal?: boolean;
  readonly showScrollIndicator?: boolean;
  readonly contentPadding?: number;
  readonly itemSpacing?: number;
}
