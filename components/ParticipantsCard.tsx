import React from 'react';
import { View } from 'react-native';
import { AvatarGroup } from '~/components/AvatarGroup';
import { Text } from '~/components/Themed';
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from '~/components/ui';
import { useTheme } from '~/hooks/useTheme';
import { Users } from '~/lib/icons';

interface Participant {
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

interface ParticipantsCardProps {
  readonly teams: Team[];
}

export function ParticipantsCard({ teams }: ParticipantsCardProps) {
  const { isDark, colors } = useTheme();
  return (
    <Card className='w-full max-w-xl self-center mb-4'>
      <CardHeader>
        <View className='flex flex-row items-center gap-x-2'>
          <Users size={18} />
          <Text className='font-bold'>Participantes</Text>
        </View>
      </CardHeader>
      <CardContent>
        <View className='flex flex-row justify-between items-stretch gap-x-8'>
          {teams.map((team, idx) => (
            <React.Fragment key={team.id}>
              {idx === 1 && (
                <Separator
                  orientation='vertical'
                  className='mx-4 w-[1px] h-auto'
                  style={{ backgroundColor: colors.separator }}
                />
              )}
              <View className='flex-1 items-center'>
                <View className='flex flex-row items-center gap-x-2 mb-1'>
                  <Badge
                    variant='default'
                    className='h-6 w-6 p-0 items-center justify-center rounded-md bg-gray-700 dark:bg-gray-200'
                  >
                    <Text
                      className='text-xs font-bold'
                      color={isDark ? 'black' : 'white'}
                    >
                      {idx + 1}
                    </Text>
                  </Badge>
                  <Text className='text-base font-medium text-gray-700 dark:text-gray-200'>
                    {team.name}
                  </Text>
                </View>
                <AvatarGroup
                  participants={team.participants}
                  className='my-2'
                />
                <Text className='mt-2 text-center'>
                  <Text className='font-bold text-lg'>
                    {team.participants.length}
                  </Text>
                  <Text className='text-lg'>
                    {' '}
                    / {team.minParticipants}-{team.maxParticipants}
                  </Text>
                </Text>
              </View>
            </React.Fragment>
          ))}
        </View>
      </CardContent>
    </Card>
  );
}
