type FnType = (...args: any[]) => void;

export const composeFn = (...functions: FnType[]) => {
  return (...args: any[]) => {
    functions.forEach((func) => func(...args));
  };
};
