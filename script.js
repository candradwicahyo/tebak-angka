window.onload = () => {
  
  const input = document.querySelector('.input');
  const button = document.querySelector('.button');
  
  function tebakAngka() {
    let limit = 10;
    let randomNumber = Math.floor(Math.random() * limit);
    
    button.addEventListener('click', () => {
      const value = input.value;
      
      // validasi
      if (!value) return sweetalert('error', 'error!', 'isi input terlebih dahulu!');
      if (value.match(/[a-zA-Z]/gmi)) return sweetalert('error', 'error!', 'input hanya boleh berisikan angka saja!');
      if (value < randomNumber) return sweetalert('info', 'info', 'angka masih terlalu rendah!');
      if (value > randomNumber) return sweetalert('info', 'info', 'angka terlalu tinggi!');
      
      // jika angka yang dimasukkan sama dengan angka tebakan
      if (value == randomNumber) return sweetalert('success', 'benar!', `angka sesungguhnya adalah ${randomNumber}. mau mencoba lagi?`, true);
      
    });
  }
  
  tebakAngka();
  
  function sweetalert(icon,title,text,more = false) {
    if (more == false) {
      swal.fire ({
        icon: icon,
        title: title,
        text: text
      });
    }
    
    if (more == true) {
      swal.fire ({
        icon: icon,
        title: title,
        text: text,
        showCancelButton: true,
        cancelButtonText: 'tidak',
        confirmButtonText: 'iya'
      }).then(result => {
        if (result.isConfirmed) {
          tebakAngka();
          input.value = '';
        }
      });
    }
  }
  
}