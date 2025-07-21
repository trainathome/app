import { CustomMapPinBase } from './custom/CustomMapPinBase'; // Asegúrate de la ruta correcta
import { BaseIcon } from './BaseIcon';
import { BaseIconProps } from '@/interfaces';

export function MapPin(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={CustomMapPinBase} {...props} />;
}
