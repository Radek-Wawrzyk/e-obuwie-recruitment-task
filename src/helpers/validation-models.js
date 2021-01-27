export const isRequired = (value) => {
  return (value  || value.length > 0) ? true : false;
}

export const min = (value, minValue) => {
  return (value && value.length >= minValue) ? true : false;
}