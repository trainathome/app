import { Sport } from '../common/Sports';

export interface ActivityParticipant {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface ActivitySquareCardProps {
  readonly sport: Sport;
  readonly date: string;
  readonly time: string;
  readonly duration: string;
  readonly level: string;
  readonly participants: ActivityParticipant[];
  readonly creator: ActivityParticipant;
  readonly onPress?: () => void;
}
