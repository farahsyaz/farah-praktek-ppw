// Fungsi untuk menangani klik keranjang
document.querySelector('.cart-icon').addEventListener('click', function() {
    alert('Keranjang belanja Anda akan ditampilkan di sini.');
});

// Animasi scroll halus untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Hitung jumlah produk di keranjang (simulasi)
let cartItems = 0;
document.querySelectorAll('.product-card .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if(e.target.textContent === 'Lihat Detail') return;
        e.preventDefault();
        cartItems++;
        document.querySelector('.cart-count').textContent = cartItems;
        alert('Produk telah ditambahkan ke keranjang!');
    });
});

// Efek scroll header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});