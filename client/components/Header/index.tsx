import { Flex } from '@/common/components/Flex';
import LangChange from '@/common/components/LangChange/LangChange.component';
import { FormControlLabel, Switch, Typography, useTheme } from '@mui/material';
import Link from 'next/link';

interface HeaderProps {
  switchTheme: () => void;
}

const Header = ({ switchTheme }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Flex alignHorizontal="space-between">
      <Typography variant="h2">Feedback</Typography>

      <Flex alignVertical="center" gap="10px">
        <Link href="/signin">Login</Link>

        <span>|</span>
        <LangChange />
        <span>|</span>
        <FormControlLabel
          control={<Switch />}
          label={theme.palette.mode}
          labelPlacement="start"
          checked={theme.palette.mode === 'dark'}
          onChange={switchTheme}
          sx={{ marginLeft: 0 }}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
