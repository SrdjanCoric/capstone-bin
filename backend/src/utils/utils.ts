export const genId = () => {
  const DIGITS =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._~";
  const n = DIGITS.length;
  let uuid = "";
  for (let i = 0; i < 8; i++) {
    uuid += DIGITS[Math.floor(Math.random() * n)];
  }
  return uuid;
};
