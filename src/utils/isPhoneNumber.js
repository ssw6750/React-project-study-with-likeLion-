export const isPhoneNumber = (value, withoutHyphen = false) => {
  value = value.toString();

  if (withoutHyphen && value.length < 12) {
    value = value.split('');
    let firstNumber = value.splice(0, 3).join('');
    let lastNumber = value.splice(value.length - 4).join('');
    let middleNumber = value.join('');
    value = `${firstNumber}-${middleNumber}-${lastNumber}`;
  }

  const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

  return regExp.test(value);
};
