'use client';

import RootModal from '@/components/RootModal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { MODAL_SIZES } from '../RootModal/types';
import { IAuthModalProps, IUserData } from './types';

const AuthModal = ({ isOpen, onClose }: IAuthModalProps) => {
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  });

  const handleClick = () => {};

  const handleChangeState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setUserData({ ...userData, [id]: value });
  };

  return (
    <RootModal
      size={MODAL_SIZES.small}
      title="Login"
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            paddingBottom: 2,
            gap: 1,
          }}
        >
          <TextField
            id="email"
            label="Email"
            onChange={handleChangeState}
            placeholder="email"
            type="outlined"
            value={userData.email}
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            onChange={handleChangeState}
            placeholder="password"
            type="password"
            value={userData.password}
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </Box>
      </>
    </RootModal>
  );
};

export default AuthModal;
