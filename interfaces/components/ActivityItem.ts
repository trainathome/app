import type { BaseCardItem } from './CardCarousel';

export interface ActivityItem extends BaseCardItem {
  readonly activityType: string;
  readonly date: string;
  readonly time: string;
  readonly duration: string;
  readonly level: string;
  readonly organizer: {
    name: string;
    username: string;
    avatarUrl: string;
  };
}
