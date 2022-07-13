function tampilPattern(n) {
    //parameter harus ganjil
    if (n % 2 === 0) {
      return false;
    } else {
      let string = "";

      // cari pertama tengah akhir
      let pertama = 0
      let tengah = (n-1)/2
      let terakhir = n-1

      for(let i = 0; i < n; i++) { 
        for(let j = 0; j < n; j++) { 
          if (i === tengah && j === tengah) {
            string += "#";
          } else {
            if ((i === pertama && j === pertama)  (i === terakhir && j === terakhir)  (i === pertama && j === terakhir)  (i === tengah && j === tengah) ){
              string += "*";
            } else {
              string += "#";
            }
          }
          
        }
        // baris baru setiap baris
        string += "\n";
        
      }
      // tampilkan dilayar
      console.log(string);

    }
}

tampilPattern(5);