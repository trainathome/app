import { CustomMapPinBase } from './custom/CustomMapPinBase'; // Asegúrate de la ruta correcta
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function MapPin(props: Readonly<Omit<BaseIconProps, 'icon'>>) {
  return <BaseIcon icon={CustomMapPinBase} {...props} />;
}
