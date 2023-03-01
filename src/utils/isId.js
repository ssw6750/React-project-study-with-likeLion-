export const isId = (value, { min = 4, max = 19 } = {}) => {
  const regExp = new RegExp(`^[a-z]+[a-z0-9]{${min},${max}}$`, 'g');
  return regExp.test(value);
};


