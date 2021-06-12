/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file cari-angka-terkecil.js
 */

const Cari = require('./cari-angka-terkecil');
let koleksi = [35,27,13,3,12,25,45];
let cari = new Cari();
let hasil = cari.angkaTerkecil(koleksi);
console.log(hasil);