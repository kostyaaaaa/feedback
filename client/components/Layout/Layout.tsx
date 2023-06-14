import React, { ReactElement, ReactFragment, ReactPortal } from 'react';

type ReactNode =
  | ReactElement
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return <>{children}</>;
}

export default Layout;
