import { View } from 'react-native';
import { Text } from '~/components/Themed';
import { Info } from '~/lib/icons';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui';

interface InfoCardProps {
  title: string;
  description: string;
}

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>
          <View className='flex flex-row items-center gap-x-2'>
            <Info size={18} />
            <Text>{title}</Text>
          </View>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text>{description}</Text>
      </CardContent>
    </Card>
  );
}
