var nama = "junto";
var peran = "dukun";

if (nama === "" && peran === ""){

  console.log("Nama harurs di isi!!");

} else if (nama !="" && peran === "") {

  console.log("Halo",nama, "Peran harus di isi");

} else if (nama !="" && peran === "dukun") {

  console.log("Selamat Datang Di dunia gaib " + nama );
  console.log("Halo",peran ,nama, "Kamu dapat menyantet dengan matramu !" );

} else if (nama !="" && peran === "dokter") {

  console.log("Selamat Datang Di dunia gaib " + nama );
  console.log("Halo",peran ,nama, "Kamu dapat menyuntik dngan suntikan mu !" );

} else if (nama !="" && peran === "begal") {

  console.log("Selamat Datang Di dunia gaib " + nama );
  console.log("Halo",peran ,nama, "Kamu dapat membegal dngan golok mu !" );

}