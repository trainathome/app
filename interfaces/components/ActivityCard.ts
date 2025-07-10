import { Sport } from '../common/Sports';

export interface OrganizerInfo {
  name: string;
  username: string;
  avatarUrl: string;
}

export interface ActivityCardProps {
  readonly activityType: Sport;
  readonly activitySubtype: string;
  readonly date: string;
  readonly time: string;
  readonly duration: string;
  readonly level: string;
  readonly organizer: OrganizerInfo;
}
