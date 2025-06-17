export interface AvatarGroupParticipant {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface AvatarGroupProps {
  readonly participants: AvatarGroupParticipant[];
  readonly maxVisible?: number;
  readonly className?: string;
}
