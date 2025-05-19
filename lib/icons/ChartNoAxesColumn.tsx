import { ChartNoAxesColumn as LucideChartNoAxesColumn } from 'lucide-react-native';
import { BaseIcon, BaseIconProps } from './BaseIcon';

export function ChartNoAxesColumn(
  props: Readonly<Omit<BaseIconProps, 'icon'>>
) {
  return <BaseIcon icon={LucideChartNoAxesColumn} {...props} />;
}
