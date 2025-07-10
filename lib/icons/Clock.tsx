import { Clock as LucideClock } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function Clock(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideClock} {...props} />;
}
