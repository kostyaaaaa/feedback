import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

const LangChange = () => {
  const router = useRouter();

  const handleLocaleChange = (lang: string) => {
    router.replace(router.pathname, router.pathname, { locale: lang });
  };

  return (
    <Box
      sx={{ border: '1px solid blue', padding: '2px', borderRadius: '10px' }}
    >
      {router.locales?.map((item) => (
        <Button
          sx={{ borderRadius: '10px' }}
          variant={router.locale === item ? 'contained' : 'text'}
          key={item}
          onClick={() => handleLocaleChange(item)}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default LangChange;
