import React, { FC } from 'react';
import FlexProps from './Flex.props';
import { Box } from '@mui/material';

const Flex: FC<FlexProps> = (props: FlexProps) => {
  const {
    alignVertical,
    alignHorizontal,
    children,
    className,
    direction,
    flex,
    flexWrap,
    gap,
    margin,
    minWidth,
    maxWidth,
    padding,
    width,
    ...rest
  } = props;

  const additionalStyles: Record<string, string | number> = {
    display: 'flex',
  };

  if (direction) {
    additionalStyles['flexDirection'] = direction;
  }

  if (alignVertical) {
    if (direction === 'column' || direction === 'column-reverse') {
      additionalStyles['justifyContent'] = alignVertical;
    } else {
      additionalStyles['alignItems'] = alignVertical;
    }
  }

  if (alignHorizontal) {
    if (direction === 'column' || direction === 'column-reverse') {
      additionalStyles['alignItems'] = alignHorizontal;
    } else {
      additionalStyles['justifyContent'] = alignHorizontal;
    }
  }

  if (gap) {
    additionalStyles['gap'] = gap;
  }

  if (maxWidth) {
    additionalStyles['maxWidth'] = maxWidth;
  }

  if (minWidth) {
    additionalStyles['minWidth'] = minWidth;
  }

  if (margin) {
    additionalStyles['margin'] = margin;
  }

  if (flexWrap) {
    additionalStyles['flexWrap'] = flexWrap;
  }

  if (width) {
    additionalStyles['width'] = width;
  }

  if (flex) {
    additionalStyles['flex'] = flex;
  }

  if (padding) {
    additionalStyles['padding'] = padding;
  }

  return (
    <Box className={className} style={additionalStyles} {...rest}>
      {children}
    </Box>
  );
};

export default Flex;
