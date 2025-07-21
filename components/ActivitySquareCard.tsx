import { memo } from 'react';
import { Text, View } from '~/components/Themed';
import { Card, CardContent, CardHeader, Separator } from '~/components/ui';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { useTheme } from '~/hooks/useTheme';
import { ActivitySquareCardProps, getSportColor } from '~/interfaces';
import { ChartNoAxesColumn, Clock, Soccer } from '~/lib/icons';

export const ActivitySquareCard = memo(function ActivitySquareCard({
  sport,
  date,
  time,
  duration,
  level,
  participants,
  creator,
  onPress,
}: Readonly<ActivitySquareCardProps>) {
  const { colors } = useTheme();
  const sportColor = getSportColor(sport);

  return (
    <Card
      className='w-40 h-50 mx-2'
      style={{
        borderBottomWidth: 4,
        borderBottomColor: sportColor.primary,
        borderRadius: 12,
      }}
    >
      <CardHeader className='pb-3'>
        <View className='flex flex-row justify-between items-center gap-x-2'>
          <View
            className='w-8 h-8 rounded-full items-center justify-center'
            style={{ backgroundColor: sportColor.primary }}
          >
            <Soccer size={16} color='white' />
          </View>
          <Text className='font-bold text-base flex-1' numberOfLines={1}>
            {sport}
          </Text>
        </View>
      </CardHeader>

      <CardContent className='flex-1 justify-between px-4 pb-4'>
        <View>
          <View className='flex flex-row items-center justify-between mb-3'>
            <View className='flex-1'>
              <Text className='text-sm font-medium'>{date}</Text>
              <Text className='text-sm'>{time}</Text>
            </View>
            <View className='flex flex-col items-center gap-y-1'>
              <Avatar alt='Organizer avatar' className='h-6 w-6'>
                <AvatarImage source={{ uri: creator.avatarUrl }} />
                <AvatarFallback>
                  <Text className='text-xs'>
                    {creator.name.charAt(0).toUpperCase()}
                  </Text>
                </AvatarFallback>
              </Avatar>
              <Text className='text-xs'>{creator.name}</Text>
            </View>
          </View>

          <View className='flex flex-row items-center justify-between mb-3'>
            <View className='flex flex-row items-center gap-x-1'>
              <Clock size={12} />
              <Text className='text-xs'>{duration}</Text>
            </View>
            <View className='flex flex-row items-center gap-x-1'>
              <ChartNoAxesColumn size={12} />
              <Text className='text-xs'>{level}</Text>
            </View>
          </View>

          <Separator
            orientation='horizontal'
            className='my-3'
            style={{ backgroundColor: colors.separator }}
          />
        </View>

        <View className='flex flex-row items-center justify-center gap-1'>
          {participants.slice(0, 3).map((participant) => (
            <Avatar
              key={participant.id}
              alt={`Imagen de perfil de ${participant.name}`}
              className='h-7 w-7'
            >
              <AvatarImage source={{ uri: participant.avatarUrl }} />
              <AvatarFallback>
                <Text className='text-xs'>
                  {participant.name.charAt(0).toUpperCase()}
                </Text>
              </AvatarFallback>
            </Avatar>
          ))}

          {participants.length > 3 && (
            <View
              className='w-7 h-7 rounded-full items-center justify-center border-2 border-dashed'
              style={{
                borderColor: colors.muted,
                backgroundColor: 'transparent',
              }}
            >
              <Text
                className='text-xs font-medium'
                style={{ color: colors.textPrimary }}
              >
                +{participants.length - 3}
              </Text>
            </View>
          )}
        </View>
      </CardContent>
    </Card>
  );
});
