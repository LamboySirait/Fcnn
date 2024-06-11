document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.querySelector('.start-btn');
  if (startButton) {
    startButton.addEventListener('click', function() {
      window.location.href = 'upload.html';
    });
  }

  // Fungsionalitas upload file pada upload.html
  var fileInput = document.getElementById('file-input');
  if (fileInput) {
    document.querySelector('.upload-btn').addEventListener('click', function() {
      fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
      handleFileUpload(event.target.files);
    });

    // Setup drag and drop events
    var uploadBox = document.querySelector('.upload-box');
    uploadBox.addEventListener('dragover', function(event) {
      event.preventDefault(); // Mencegah default browser yang membuka file
    });

    uploadBox.addEventListener('drop', function(event) {
      event.preventDefault(); // Mencegah default browser
      var files = event.dataTransfer.files;
      if (files.length) {
        handleFileUpload(files); // Proses file yang didrop
      }
    });
  }

  // Event listener untuk tombol 'SCAN IMAGE' pada preview.html
  var scanButton = document.getElementById('scanButton');
  if (scanButton) {
    scanButton.addEventListener('click', function() {
      console.log('Scanning image...');
      // Tambahkan kode untuk proses scanning di sini
    });
  }
  
  // Memeriksa jika kita berada di halaman preview.html
  var imagePlaceholder = document.getElementById('imagePlaceholder');
  var fileNameElement = document.getElementById('fileName');
  if (imagePlaceholder && fileNameElement) {
    displayUploadedFile(imagePlaceholder, fileNameElement);
  }
});

// Fungsi untuk menangani file yang diupload
function handleFileUpload(files) {
  var file = files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    localStorage.setItem('uploadedImage', e.target.result);
    localStorage.setItem('uploadedFileName', file.name); // Menyimpan nama file
    window.location.href = 'preview.html'; // Pindah ke halaman preview
  };
  reader.readAsDataURL(file);
}

// Fungsi untuk menampilkan gambar yang diupload di halaman preview
function displayUploadedFile(imagePlaceholder, fileNameElement) {
  var uploadedImage = localStorage.getItem('uploadedImage');
  var uploadedFileName = localStorage.getItem('uploadedFileName'); // Mendapatkan nama file
  
  if (uploadedImage && uploadedFileName) {
    imagePlaceholder.src = uploadedImage; // Menampilkan gambar yang diunggah
    fileNameElement.textContent = uploadedFileName; // Menampilkan nama file
  }
}
