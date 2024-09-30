const getMaxValue = <T>(collection: Array<T>, prop: keyof T): number | null => {
  if (collection.length === 0) return null;

  // Use reduce to find the maximum value for the given property
  return collection.reduce((max, item) => {
    const value = item[prop];

    // Ensure the property is a number before comparison
    if (typeof value === 'number') {
      return value > max ? value : max;
    }

    // If the property isn't a number, skip it
    return max;
  }, Number.NEGATIVE_INFINITY);
};

export { getMaxValue };
