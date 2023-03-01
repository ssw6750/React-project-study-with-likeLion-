export const isPassword = (value, { min = 6, max = 16, isStrong = false } = {}) => {
  let regExp = null;

  if (!isStrong) {
    regExp = new RegExp(`^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{${min},${max}}$`);
  } else {
    regExp = new RegExp(
      `^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$\`~!@$!%*#^?&\\(\\)\-_=+]).{${min},${max}}$`
    );
  }

  return regExp.test(value);
};
