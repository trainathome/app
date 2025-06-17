export interface Participant {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Team {
  id: string;
  name: string;
  participants: Participant[];
  maxParticipants: number;
  minParticipants: number;
}

export interface ParticipantsCardProps {
  readonly teams: Team[];
}
