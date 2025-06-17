import type { BaseCardItem } from './CardCarousel';

export interface InfoItem extends BaseCardItem {
  readonly title: string;
  readonly description: string;
  readonly className?: string;
}
