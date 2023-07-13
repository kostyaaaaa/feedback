import { Flex } from '@/common/components/Flex';
import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  const { t } = useTranslation('common');
  return (
    <Flex>
      <Typography>{t('message')}</Typography>
    </Flex>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
