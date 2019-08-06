window.data = {
  showAllData: dataPlaces => {
    const completeData = dataPlaces.map(({ id, name, rating }) => ({
      id,
      name,
      rating
    }));
    return completeData;
  },

  //Filter by letter
  filterByLetter: (dataPlaces, name) => {
    const concidence = dataPlaces.filter(element =>
      element.name.toLowerCase().match(name.toLowerCase())
    );
    return concidence;
  },

  sortData: (data, sortBy, sortOrder) => {
    if (sortOrder == "order") {
      return data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }
  }
};
