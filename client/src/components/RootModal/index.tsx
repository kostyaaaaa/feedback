import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { IRootModalProps } from './types';

const RootModal = ({
  isOpen,
  children,
  onClose,
  title,
  size,
}: IRootModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Card variant="outlined" sx={{ maxWidth: size, width: size }}>
        <CardHeader
          title={
            <Typography variant="h4" color="primary.main" align="center">
              {title}
            </Typography>
          }
        />
        <CardContent>{children}</CardContent>
      </Card>
    </Modal>
  );
};

export default RootModal;
