export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const cleanedValues = [];

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const cleanedValue = value.substring(startString.length);
      cleanedValues.push(cleanedValue);
    }
  });

  return cleanedValues.join('-');
}
