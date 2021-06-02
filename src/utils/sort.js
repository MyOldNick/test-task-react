const sortArr = (array) => {
  array.sort((a, b) => {
    if (a.stocks > b.stocks) {
      return 1;
    }
    if (a.stocks < b.stocks) {
      return -1;
    }
    return 0;
  });
};

export default sortArr;
