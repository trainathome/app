import { memo } from 'react';
import { Text, View } from '~/components/Themed';
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from '~/components/ui';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { useTheme } from '~/hooks/useTheme';
import { ActivityCardProps, getSportColor } from '~/interfaces';
import { ChartNoAxesColumn, Clock, Layers, Soccer } from '~/lib/icons';

export const ActivityCard = memo(function ActivityCard({
  activityType,
  activitySubtype,
  date,
  time,
  duration,
  level,
  organizer,
}: Readonly<ActivityCardProps>) {
  const { colors, isDark } = useTheme();
  const sportColor = getSportColor(activityType);

  return (
    <Card
      style={{ borderBottomWidth: 4, borderBottomColor: sportColor.primary }}
    >
      <CardHeader>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center gap-x-2'>
            <Soccer size={18} />
            <View className='flex flex-row items-center'>
              <Text className='font-bold'>{activityType}</Text>
              <Separator
                orientation='vertical'
                className='h-4 w-[2px] mx-2'
                style={{ backgroundColor: colors.separator }}
              />
              <Text>{activitySubtype}</Text>
            </View>
          </View>
          <Badge
            variant='secondary'
            className='flex flex-row items-center gap-x-2 px-2 py-1 bg-gray-400 dark:bg-white'
          >
            <Layers size={18} color={isDark ? 'black' : 'white'} />
            <Text
              className='text-sm uppercase'
              color={isDark ? 'black' : 'white'}
            >
              ABIERTA
            </Text>
          </Badge>
        </View>
      </CardHeader>
      <View className='px-6'>
        <Separator
          orientation='horizontal'
          className='mb-6'
          style={{ backgroundColor: colors.separator }}
        />
      </View>
      <CardContent>
        <View className='flex flex-row items-center justify-between'>
          <View className='w-[50%] flex flex-row items-center'>
            <View className='flex-1 items-center gap-y-1'>
              <Text className='text-xl font-bold'>{date}</Text>
              <Text className='font-bold'>{time}</Text>
            </View>
            <View className='flex-1 items-center gap-y-1'>
              <Avatar
                alt={`Imagen de perfil de ${organizer.name}`}
                className='h-8 w-8'
              >
                <AvatarImage source={{ uri: organizer.avatarUrl }} />
                <AvatarFallback>
                  <Text>{organizer.name.charAt(0)}</Text>
                </AvatarFallback>
              </Avatar>
              <Text
                className='text-ellipsis overflow-hidden text-sm'
                numberOfLines={1}
              >
                {organizer.username}
              </Text>
            </View>
          </View>
          <Separator
            orientation='vertical'
            className='h-12 w-[2px]'
            style={{ backgroundColor: colors.separator }}
          />
          <View className='w-[35%] gap-y-2'>
            <View className='flex flex-row items-center gap-x-2'>
              <Clock size={18} />
              <Text>{duration}</Text>
            </View>
            <View className='flex flex-row items-center gap-x-2'>
              <ChartNoAxesColumn size={18} />
              <Text>{level}</Text>
            </View>
          </View>
        </View>
      </CardContent>
    </Card>
  );
});
