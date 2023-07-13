import { Flex } from '@/common/components/Flex';
import { Container, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Login = () => {
  const { t } = useTranslation('auth');

  return (
    <Flex direction="column">
      <Typography>{t('signIn_header')}</Typography>
      <Link href="/">Dashboard</Link>
    </Flex>
  );
};
export const LoginLayout = (page: ReactNode) => (
  <Container fixed>{page}</Container>
);

Login.getLayout = LoginLayout;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
    },
  };
}

export default Login;
