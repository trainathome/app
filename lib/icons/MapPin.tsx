import { MapPin as LucideMapPin } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function MapPin(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideMapPin} {...props} />;
}
