const barangA = 4550;
const barangB = 5330;
const barangC = 8653;

function hitungbarang(kualitas, qty) {
  var totalHarga = 0;
  var totalBayar = 0;
  var potongan = 0;
  
  if (kualitas === "A") {
    totalHarga = barangA * qty;
    if (qty > 13) {
      potongan = 231 * qty;
    }
    
  }
  
  switch(kualitas) {
      case "A":
      totalHarga = barangA * qty;
      if (qty > 13) {
        potongan = 231 * qty;
      }
                          
        break;
      case "B":
        totalHarga = barangB * qty;
        if (qty > 7) {
        potongan = 23/100 * totalHarga;
      }

        break;
      case "C":
      totalHarga = barangC * qty;
        
        break;
      default:
        
  }
  
  totalBayar = totalHarga - potongan;
  
  console.log("Total harga barang : ", totalHarga);
  console.log("Potongan : ", potongan);
  console.log("Total yang harus dibayar : ", totalBayar);
}

hitungbarang("A", 14);

