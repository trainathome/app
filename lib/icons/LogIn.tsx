import { LogIn as LucideLogIn } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function LogIn(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideLogIn} {...props} />;
}
