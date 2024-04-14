export const filterData = (input, allrestaurants) => {
  const filterData = allrestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(input.toLowerCase())
  );
  return filterData;
};
