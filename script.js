// Mencegah klik kanan untuk menyalin konten
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Mencegah pemilihan teks
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// Menangani pengiriman RSVP form
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Terima kasih atas konfirmasi Anda!");
});


    alert(`Terima kasih, ${nama}! Anda telah memilih untuk ${kehadiran === 'ya' ? 'hadir' : 'tidak hadir'}.`);
    // Bisa menambahkan pengiriman data ke server di sini, atau email.
});
