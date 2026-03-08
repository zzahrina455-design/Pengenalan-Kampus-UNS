function sambutUser(event) {
    // Mencegah halaman web melakukan refresh otomatis saat form di submit
    event.preventDefault();

    // Mengamnbil nilai dari form 'myForm' dan input yang bernama 'nama'
    var namaUser= document.forms["myForm"]["nama"].value;

    // Menampilkan pop-up alert
    alert("Hello " + namaUser + "welcome to Sebelas Maret University!");

    // Opsional: Mengosongkan form setelah di submit
    document.forms["myFrom"].reset();
}