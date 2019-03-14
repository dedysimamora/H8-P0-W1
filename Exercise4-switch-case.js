var tanggal = 1;
var bulan = 5;
var tahun = 1945;

if (tanggal<=0 || tanggal>31){
    console.log("Tanggal Tidak Valid");
}
if (tanggal>29 && bulan==2){
  console.log("Tanggal Tidak Valid");
}

else if (bulan <=0 || bulan > 12){

  console.log("Bulan Tidak Valid");
}
else {
  switch(bulan){
    case 1:
    bulan = "Januari";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 2:
    bulan = "Februari";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 3:
    bulan = "Maret";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 4:
    bulan = "April";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 5:
    bulan = "Mei";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 6:
    bulan = "Juni";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 7:
    bulan = "Juli";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 8:
    bulan = "Agustus";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 9:
    bulan = "September";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 10:
    bulan = "Oktober";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 11:
    bulan = "November";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

    case 12:
    bulan = "Desember";
    console.log(tanggal +" "+ bulan +" "+ tahun);
    break;

  }
}





// switch(bulan){
//     case 1:
//       bulan = "Januari";
//       console.log(tanggal +" "+ bulan +" "+ tahun);
//       break;

//     case 2:
//     bulan = "Februari";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 3:
//     bulan = "Maret";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 4:
//     bulan = "April";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 5:
//     bulan = "Mei";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 6:
//     bulan = "Juni";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 7:
//     bulan = "Juli";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 8:
//     bulan = "Agustus";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 9:
//     bulan = "September";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 10:
//     bulan = "Oktober";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 11:
//     bulan = "November";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;

//     case 12:
//     bulan = "Desember";
//     console.log(tanggal +" "+ bulan +" "+ tahun);
//     break;


//     case 12:
//     console.log("tanggal yang di input tidak valid");
//     break;
// }


// if(tanggal <=0 || tanggal > 31){
//   console.log("Tanggal Tidak Valid"); 
// }
// else if(tahun <= 1000 || tahun >= 3000){
//   console.log('Tahun Tidak Valid');
// }
// else{
//   console.log(tanggal +" "+ bulan +" "+ tahun);
// }