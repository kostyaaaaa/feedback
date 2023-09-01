import jwt from 'jsonwebtoken';

export const generateToken = (body: { id: number }) => {
  const token = jwt.sign({ ...body }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d',
  });
  return token;
};
