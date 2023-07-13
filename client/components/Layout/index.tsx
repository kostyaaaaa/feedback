import { PropsWithChildren } from 'react';
import { Flex } from '../../common/components/Flex';
import Header from '../Header';
import { Box, Container } from '@mui/material';

const Layout = ({
  children,
  switchTheme,
}: PropsWithChildren & { switchTheme: () => void }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container fixed>
        <Flex direction="column">
          <Header switchTheme={switchTheme} />
          {children}
        </Flex>
      </Container>
    </Box>
  );
};

export default Layout;
