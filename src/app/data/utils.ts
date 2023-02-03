export const isEmptyField = (value: string): boolean => !value;

export const isInvalidName = (value: string): boolean => !/^[A-Za-z -]{3,}$/.test(value);

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

export const formatUsername = (value: string): string => {
  const res = value
    .trim()
    .split(/-+/)
    .map((i) => i.trim())
    .join('-')
    .split(/\s+/)
    .join(' ');

  return res;
};

export const formatEmail = (value: string): string => value.trim();

export const formatPhone = (value: string): string => value.trim().split(/\s+/).join('');
