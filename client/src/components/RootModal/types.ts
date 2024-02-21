import { ReactElement } from 'react';

export enum MODAL_SIZES {
  small = 400,
  medium = 550,
  big = 850,
}

export interface IRootModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
  title: string;
  size: MODAL_SIZES;
}
