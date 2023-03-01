export const isBlank = (value) => {
  const regExp =
    /^.{1,}$/i;
  return regExp.test(value);
}