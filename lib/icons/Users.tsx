import { BaseIconProps } from '@/interfaces';
import { Users as LucideUsers } from 'lucide-react-native';
import { BaseIcon } from './BaseIcon';

export function Users(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideUsers} {...props} />;
}
