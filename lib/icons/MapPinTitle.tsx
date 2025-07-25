import { MapPin as LucideMapPinTitle } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function MapPinTitle(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideMapPinTitle} {...props} />;
}
