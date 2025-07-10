import { Info as LucideInfo } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function Info(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideInfo} {...props} />;
}
