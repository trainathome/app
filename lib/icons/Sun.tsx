import { Sun as LucideSun } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function Sun(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideSun} {...props} />;
}
