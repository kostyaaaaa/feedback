export const apiVersion = (version = 1) =>
  `${process.env.NEXT_PUBLIC_API_URL}/v${version}/`;
