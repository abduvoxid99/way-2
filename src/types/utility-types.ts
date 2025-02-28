export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: number | string;
  color?: string;
  stroke?: string;
  muted?: boolean;
}

export type IconType = React.FC<IconBaseProps>;
