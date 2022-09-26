const capitalize = (str: string) => {
  let result = str;
  result = result[0].toUpperCase() + result.slice(1);
  return result;
};

export default capitalize;
