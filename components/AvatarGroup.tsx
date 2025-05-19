import React from 'react';
import { View } from 'react-native';
import { Text } from './Themed';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface AvatarGroupParticipant {
  id: string;
  name: string;
  avatarUrl: string;
}

interface AvatarGroupProps {
  readonly participants: AvatarGroupParticipant[];
  readonly maxVisible?: number;
  readonly className?: string;
}

export function AvatarGroup({
  participants,
  maxVisible = 3,
  className = '',
}: AvatarGroupProps) {
  const visible = participants.slice(0, maxVisible);
  const extra = participants.length - maxVisible;

  return (
    <View className={`flex flex-row items-center gap-x-1 ${className}`}>
      {visible.map((participant, idx) => (
        <View
          key={participant.id}
          className={`-ml-3 first:ml-0 border-2 border-white dark:border-black rounded-full`}
          style={{ zIndex: visible.length - idx }}
        >
          <Avatar alt={participant.name} className='h-8 w-8'>
            <AvatarImage source={{ uri: participant.avatarUrl }} />
            <AvatarFallback>
              <Text>{participant.name.charAt(0)}</Text>
            </AvatarFallback>
          </Avatar>
        </View>
      ))}
      {extra > 0 && (
        <View className='-ml-3 h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600 items-center justify-center'>
          <Text className='font-semibold text-xs'>+{extra}</Text>
        </View>
      )}
    </View>
  );
}
