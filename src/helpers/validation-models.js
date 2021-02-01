export const isRequired = (value) => {
  return !!((value || value.length > 0));
};

export const min = (value, minValue) => {
  return !!((value && value.length >= minValue));
};
