import { PropsWithChildren, ReactNode } from 'react';

type FlexAlign =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export default interface FlexProps extends PropsWithChildren {
  alignVertical?: FlexAlign;
  alignHorizontal?: FlexAlign;
  children?: ReactNode | ReactNode[];
  className?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flex?: string;
  flexWrap?: FlexWrap;
  gap?: string;
  margin?: string;
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
  width?: string;
}
