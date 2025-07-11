import { BaseIconProps } from '@/interfaces';
import { Info as LucideInfo } from 'lucide-react-native';
import { BaseIcon } from './BaseIcon';

export function Info(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideInfo} {...props} />;
}
