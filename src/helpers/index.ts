export const setValueToLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getValueFromLocalStorage = (key: string): any => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error(e);
  }
};
