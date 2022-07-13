function urutkan(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let tampung = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tampung;
        }
      }
    }
    return array;
  }
  
  let array = [20,11,9,13,14,19,4,3,7,12];
  
  let urut = urutkan(array);
  
  console.log(urut);