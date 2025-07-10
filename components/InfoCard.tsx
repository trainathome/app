import { useState } from 'react';
import { NativeSyntheticEvent, TextLayoutEventData, View } from 'react-native';
import { Text } from '~/components/Themed';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui';
import { Button } from '~/components/ui/button';
import { InfoCardProps } from '~/interfaces';
import { Info } from '~/lib/icons';

export function InfoCard({
  title,
  description,
  className,
}: Readonly<InfoCardProps>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasMoreLines, setHasMoreLines] = useState(false);

  const handleTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const lines = e.nativeEvent.lines;
    setHasMoreLines(lines.length > 2);
  };

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle>
          <View className='flex flex-row items-center gap-x-2'>
            <Info size={18} />
            <Text className='font-bold'>{title}</Text>
          </View>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <View className='flex-col'>
          <Text
            numberOfLines={isExpanded ? undefined : 2}
            ellipsizeMode='tail'
            onTextLayout={handleTextLayout}
          >
            {description}
          </Text>
          {hasMoreLines && (
            <Button
              variant='link'
              className='p-0 self-end mt-1'
              onPress={() => setIsExpanded((prev) => !prev)}
            >
              <Text className='text-primary'>
                {isExpanded ? 'Leer menos' : 'Leer más'}
              </Text>
            </Button>
          )}
        </View>
      </CardContent>
    </Card>
  );
}
