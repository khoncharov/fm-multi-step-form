export const isEmptyField = (value: string): boolean => !value;

export const isInvalidName = (value: string): boolean => !/^[A-Za-z -]+$/.test(value);

export const isInvalidEmail = (value: string): boolean => {
  const arr = value.split('@');

  if (arr.length !== 2) {
    return true;
  }

  if (/^@/.test(value) || /@$/.test(value)) {
    return true;
  }

  return !/^\S+$/.test(arr[0]) && !/^\S+$/.test(arr[1]);
};

export const isInvalidPhone = (value: string): boolean => !/^\+[0-9]{10,}$/.test(value);
