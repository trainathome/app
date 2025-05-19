import { Layers as LucideLayers } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function Layers(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={LucideLayers} {...props} />;
}
