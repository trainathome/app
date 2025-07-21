import { BaseIconProps } from '@/interfaces';
import { Clock as LucideClock } from 'lucide-react-native';
import { BaseIcon } from './BaseIcon';

export function Clock(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideClock} {...props} />;
}
