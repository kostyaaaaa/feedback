import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
