import { BaseIconProps } from '@/interfaces';
import { Moon as LucideMoon } from 'lucide-react-native';
import { BaseIcon } from './BaseIcon';

export function Moon(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideMoon} {...props} />;
}
