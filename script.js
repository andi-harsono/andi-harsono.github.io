document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.querySelector("#comingSoonContainer h1");

    setInterval(function() {
        var randomColor = getRandomColor();
        textElement.style.color = randomColor;
    }, 1000); // Ganti warna setiap detik
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Select the header element
const header = document.querySelector("header");

// Add a class 'sticky' to the header when scrolled more than 120 pixels
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// Select menu icon and navbar elements
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle 'bx-x' class on menu icon and 'active' class on navlist when menu is clicked
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Remove 'bx-x' class on menu icon and 'active' class on navlist when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Additional code for shrinking header
var headerShrink = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        headerShrink.classList.add('small');
    } else {
        headerShrink.classList.remove('small');
    }
});


emailjs.init("4YpRukVXxUbpaMRGw"); // Gantilah "user_id_emailjs" dengan API key Email.js Anda

function kirimEmail() {
    var form = document.getElementById("myForm");

    var data = {
        nama: document.getElementById("nama").value,
        email: document.getElementById("email").value,
        pesan: document.getElementById("pesan").value
    };

    emailjs.send("service_wl2vlso", "template_mxvgtka", data)
        .then(function(response) {
            console.log("Email terkirim: ", response);
            // Tambahkan logika atau tindakan setelah pengiriman berhasil di sini
            tampilkanAlert('success-alert', 'Pesan terkirim!');
        }, function(error) {
            console.log("Error pengiriman email: ", error);
            // Tambahkan logika atau tindakan jika pengiriman gagal di sini
            tampilkanAlert('error-alert', 'Terjadi kesalahan. Silakan coba lagi.');
        });
}

function tampilkanAlert(id, pesan) {
    var alertElement = document.getElementById(id);
    alertElement.innerHTML = pesan;
    alertElement.style.display = 'block';

    // Sembunyikan alert setelah 5 detik
    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 5000);
}





window.addEventListener("scroll", function() {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (window.scrollY > 50) {
        navbar.style.fontSize = "25px";
    } else {
        navbar.style.fontSize = "25px";

    }
});

var options = {
    strings: ["Mahasiswa Bisnis Digital", "Web Developer", "FrontEnd Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
};

var typed = new Typed(".text", options);