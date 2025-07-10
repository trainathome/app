import { Users as LucideUsers } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function Users(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideUsers} {...props} />;
}
