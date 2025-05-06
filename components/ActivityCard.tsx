import { View, Text } from '~/components/Themed';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  Badge,
  Separator,
  Card,
  CardContent,
  CardHeader,
} from '~/components/ui';
import { ChartNoAxesColumn, Clock, LogIn, Soccer } from '~/lib/icons';
import { useTheme } from '~/hooks/useTheme';

interface ActivityCardProps {
  activityType: string;
  activitySubtype: string;
  date: string;
  time: string;
  duration: string;
  level: string;
  borderColor: string;
  organizer: {
    name: string;
    username: string;
    avatarUrl: string;
  };
}

export function ActivityCard({
  activityType,
  activitySubtype,
  date,
  time,
  duration,
  level,
  borderColor,
  organizer,
}: ActivityCardProps) {
  const { colors } = useTheme();
  return (
    <Card className={`w-full max-w-sm border-b-4 border-${borderColor}`}>
      <CardHeader>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center gap-x-2'>
            <Soccer size={18} />
            <View className='flex flex-row items-center'>
              <Text className='font-medium'>{activityType}</Text>
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
            className='flex flex-row items-center gap-x-2'
          >
            <LogIn size={18} className='rotate-90' />
            <Text className='text-sm uppercase'>ABIERTA</Text>
          </Badge>
        </View>
      </CardHeader>
      <CardContent>
        <View className='flex flex-row items-center justify-between'>
          <View className='w-[50%] flex flex-row items-center'>
            <View className='flex-1 items-center gap-y-1'>
              <Text className='text-xl'>{date}</Text>
              <Text>{time}</Text>
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
}
