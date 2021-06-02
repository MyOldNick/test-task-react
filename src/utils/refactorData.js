const refactorData = async (payload) => {
  const arr = [];

  for (const key in payload) {
    const data = payload[key];

    for (let i = 0; i <= data.length - 1; i++) {
      arr.splice(i, 1, { ...arr[i], [key]: data[i] });
    }
  }

  return arr;

  // const arr = [];

  // Object.keys(payload).forEach((key) => {
  //   payload[key].forEach((el, index) =>
  //     arr.splice(index, 1, { ...arr[index], [key]: el })
  //   );
  // });

  // return arr;
};

export default refactorData;
