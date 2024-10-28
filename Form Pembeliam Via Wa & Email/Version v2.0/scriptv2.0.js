document.addEventListener('click', function(event) {
    var tCb = document.querySelector('.tataCaraBayar');
    var tEmBeli = event.target;
    if (tCb && tEmBeli && !tCb.contains(tEmBeli)) {
         tCb.remove();
    }
});


function clickPopupProduk() {
 var ktbuy = document.getElementById("ktbuy");
  if (ktbuy.classList.contains("hiddenBuy")) {
    ktbuy.classList.remove("hiddenBuy");
    ktbuy.classList.add("visibleBuy");
  } else {
    ktbuy.classList.remove("visibleBuy");
    ktbuy.classList.add("hiddenBuy");
  }
}

var tataCaraHtml = '';
var gambarUrl = '';
function getTataCaraBayar(metodePembayaran) {
   switch (metodePembayaran) {
        case 'Ovo':
            gambarUrl =  payVia.ovo.gambar;
            tataCaraHtml = payVia.ovo.html;
            break;
         case 'Gopay':
            gambarUrl =  payVia.gopay.gambar;
            tataCaraHtml = payVia.gopay.html;
            break;
        case 'Dana':
            gambarUrl =  payVia.dana.gambar;
            tataCaraHtml = payVia.dana.html;
            break;
        case 'Paypal':
            gambarUrl =  payVia.paypal.gambar;
            tataCaraHtml = payVia.paypal.html;
            break;
        case 'Trakteer':
            gambarUrl = payVia.trakteer.gambar;
            tataCaraHtml = payVia.trakteer.html;
            break;
        case 'WhatsApp':
            gambarUrl = payVia.whatsApp.gambar;
            tataCaraHtml = payVia.whatsApp.html;
            break;
        case 'Email':
            gambarUrl = payVia.email.gambar;
            tataCaraHtml = payVia.email.html;
            break;
            
        default:
            return '';
    }
    return tataCaraHtml;
}

function showTataCaraBayar(metodePembayaran) {
    var tataCaraBayar = getTataCaraBayar(metodePembayaran);
    var htmlContent = `
        <div class="tataCaraBayar">
        <b>Cara bayar</b>
          <p>${tataCaraBayar}</p>
          <img class="gambarinvoice1" src="${gambarUrl}" alt="${metodePembayaran}"/>
        </div>`;
    document.getElementById("informasiTataCaraBayar").innerHTML = htmlContent;
}

var tataCaraHtmlv = '';
var gambarUrlv = '';
function getTataCaraBayarv(metodePembayaranv) {
    
   switch (metodePembayaranv) {
        case 'WhatsApp':
      gambarUrlv = payVia.whatsApp.gambar;
      tataCaraHtmlv = payVia.whatsApp.html;
            break;
        case 'Email':
      gambarUrlv = payVia.email.gambar;
      tataCaraHtmlv = payVia.email.html;
            break;
          case 'Telegram':
      gambarUrlv = payVia.telegram.gambar;
      tataCaraHtmlv = payVia.telegram.html;
            break;
            
        default:
            return '';
    }
    return tataCaraHtmlv;
}

function showTataCaraBayarv(metodePembayaranv) {
    var tataCaraBayarv = getTataCaraBayarv(metodePembayaranv);
    var htmlContentv = `
        <div class="tataCaraBayar">
        <b>Guide</b>
          <p>${tataCaraBayarv}</p>
          <img class="gambarinvoice2" src="${gambarUrlv}" alt="${metodePembayaranv}"/>
        </div>`;
    document.getElementById("informasiTataCaraBayarv").innerHTML = htmlContentv;
}


function runmetodePembayaran(){ 
var metodePembayaranRadios = document.querySelectorAll('input[name="metodePembayaran"]');
metodePembayaranRadios.forEach(radio => {
radio.addEventListener('change', function() {
        var selectedValue = this.value;
        showTataCaraBayar(selectedValue);
    });
});

var metodePembayaranRadiosx = document.querySelectorAll('input[name="deliveryMethod"]');
metodePembayaranRadiosx.forEach(radiox => {
  radiox.addEventListener('change', function() {
    var selectedValuex = this.value;
    showTataCaraBayarv(selectedValuex);
    if (selectedValuex !== "Telegram") {
      var datatelegram = document.getElementById("datatelegram");
      datatelegram.innerHTML = '';
    } else {
      var divinput = `
        <div class="metodeViabuy">
          <label for="namaInput">Nama:</label>
          <input type="text" placeholder="Nama" id="namaInput" required="required"/>
        </div>
        <div class="metodeViabuy">
          <label for="alamatInput">Alamat Lengkap:</label>
          <input type="text" placeholder="Alamat" id="alamatInput" required="required"/>
        </div>
        <div class="metodeViabuy">
          <label for="emailInput">Email:</label>
          <input type="email" placeholder="Email" id="emailInput" required="required"/>
        </div>
        <div class="metodeViabuy">
          <label for="nomorTelpInput">No. Telp:</label>
          <input type="tel" placeholder="Nomor Telp" id="nomorTelpInput" required="required"/>
        </div>
        
        <div class="metodeViabuy">
        <input type="file" id="fileInput"/>
        <label for="fileInput">Upload bukti transfer (ss/pdf):</label>
<div id="filePreview">
  <img id="imagePreview" src="#" alt="Preview" style="display: none;">
  <video id="videoPreview" src="#" controls style="display: none;"></video>
  <div id="fileNamePreview" style="display: none;"></div>
  <div id="fileMessagePreview" style="display: none;"></div>
</div>
        </div>
      `;
      var datatelegram = document.getElementById("datatelegram");
      datatelegram.innerHTML = divinput;
      
      
document.getElementById('fileInput').addEventListener('change', function() {
  const fileType = this.files[0].type.split('/')[0];
  if (fileType === 'image' || fileType === 'video' || (fileType === 'application' && this.files[0].type === 'application/pdf')) {
    previewFile();
  } else {
    const fileNameContainer = document.getElementById('fileNamePreview');
    const messageContainer = document.getElementById('fileMessagePreview');
    fileNameContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="currentColor" d="M20 4H8.83A2 2 0 0 0 7 5.17L5.17 7 5 7.17V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM13 18h-2v-2h2zm0-4h-2v-2h2zm4 4h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V8h2z"/>
</svg> ${this.files[0].name}`;
    messageContainer.textContent = 'Preview tidak tersedia untuk jenis file ini';
    fileNameContainer.style.display = 'block';
    messageContainer.style.display = 'block';
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('videoPreview').style.display = 'none';
  }
});



           }
        });
    });

}



function previewFile() {
  const fileInput = document.getElementById('fileInput');
  const previewImageContainer = document.getElementById('imagePreview');
  const previewVideoContainer = document.getElementById('videoPreview');
  const fileNameContainer = document.getElementById('fileNamePreview');
  const messageContainer = document.getElementById('fileMessagePreview');

  previewImageContainer.style.display = 'none';
  previewVideoContainer.style.display = 'none';
  fileNameContainer.style.display = 'none';
  messageContainer.style.display = 'none';

  const file = fileInput.files[0];

  if (file) {
    const fileType = file.type.split('/')[0];
    
    if (fileType === 'image') {
      const url = URL.createObjectURL(file);
      previewImageContainer.src = removeBlobFromURL(url);
      previewImageContainer.style.display = 'block';
    } else if (fileType === 'video') {
      const url = URL.createObjectURL(file);
      previewVideoContainer.src = removeBlobFromURL(url);
      previewVideoContainer.style.display = 'block';
    } else {
      fileNameContainer.innerHTML = `${file.name}`;
      messageContainer.textContent = 'Preview tidak tersedia untuk jenis file ini';
      fileNameContainer.style.display = 'block';
      messageContainer.style.display = 'block';
    }
  }
}
function removeBlobFromURL(url) {
  return url.replace(/^blob:/, 'blob:');
}

function beliProduk() {
    var modalHtml = `
    <div class="ccpopup_frmProduk hiddenBuy" id="ktbuy">
        <div class="listProduk">
            <div class="closepopup_produk">
                <button class="closeBuy" onclick="clickPopupProduk()">Close Produk</button>
            </div>
            <div class="ovf_frmProduk">
                <form id="frmProduk">
        <div class="headerProduk">
                        <img id="thumbailProduk" src="${produk[1].gambarproduk.url}"/>
                        <div class="headerProduk one"> 
                            <label for="namaProduk">Produk:</label>
                            <span data-title-produk="${produk[1].produk.nama}" id="namaProduk">${produk[1].produk.nama}</span>
                            <div class="headerharga"> 
                                <label for="hargaProduk">Harga:</label>
                                <span data-harga-produk="Rp${formatRupiah(produk[1].harga.Rp)}/$${formatDollar(produk[1].harga.dollar)}" id="hargaProduk">
                                    <p class="rupiah">${produk[1].harga.Rp}</p>/
                                    <p class="dolar">${produk[1].harga.dollar}</p>
                                </span>
                            </div>
                        </div>
                    </div>

<div class="metodeViabuy">
<div id="etalaseproduk" class="produkOptions">       </div>
</div>
<div class="jumlahProduk metodeViabuy">
    <label for="quantity">Jumlah:</label>
    <div id="quantityControls">
        <a id="decreaseQuantity">-</a>
        <span id="quantityValue">1</span>
        <a id="increaseQuantity">+</a>
    </div>
</div>
                    
<div class="metodeViabuy">
                        <label id="pilihmetodePesan">Pilih Metode via:</label>
                         <div class="metodePesanan" id="opsipembayaran">
                    <input type="radio" id="whatsappMethod" name="deliveryMethod" value="WhatsApp"/>
 <label for="whatsappMethod">WhatsApp</label>
 <input type="radio" id="emailMethod" name="deliveryMethod" value="Email">
 <label for="emailMethod"/>Email</label>
  <input type="radio" id="telegramMethod" name="deliveryMethod" value="Telegram">
 <label for="telegramMethod"/>Telegram</label>
                </div>
<div id="informasiTataCaraBayarv"></div>   
                    </div>  
                    
<div class="metodeViabuy">
                        <label id="pilihmetodePembayaran">Pilih Metode Pembayaran:</label>
      <div class="metodePembayaran">
                    <div>
<input type="radio" id="Id_Ovo" name="metodePembayaran" value="Ovo"/>
<label for="Id_Ovo">Ovo</label>
                    </div>
    <div>
<input type="radio" id="Id_Gopay" name="metodePembayaran" value="Gopay"/>
<label for="Id_Gopay">Gopay</label>
                    </div>
                    <div>
<input type="radio" id="id_Dana" name="metodePembayaran" value="Dana"/>
<label for="id_Dana">Dana</label>
                    </div>
                    <div>
<input type="radio" id="Id_Paypal" name="metodePembayaran" value="Paypal"/>
<label for="Id_Paypal">Paypal</label>
                    </div>
                    <div>
<input type="radio" id="Id_Trakteer" name="metodePembayaran" value="Trakteer"/>
<label for="Id_Trakteer">Trakteer</label>
                    </div>
                </div>
                <div id="informasiTataCaraBayar"></div>
                    </div>
                    
                       <div class="metodeViabuy">
<label for="urlWebpembeli">Link Web:</label>
<input type="text" placeholder="masukan urlweb kamu" id="urlWebpembeli" name="urlWebpembeli" required='required'/>
                    </div>
<div id="datatelegram" class="metodeViabuy">
</div>
                    <div class="metodeViabuy">
                        <label for="notes">Catatan Tambahan:</label>
                        <textarea id="catatatanPembeli" name="catatatanPembeli"></textarea>
                    </div>
                    <span class="syrtx">
                        <input type="checkbox" id="kebijakan" name="kebijakan"/><span class="ruleKebijakan">Saya sudah membaca,Mengerti, dan Setuju dengan <a class="syrt" href="#">syarat dan ketentuan</a> (wajib)</span>
                    </span>
                    <button id="kirimPesanan" type="button" onclick="pesananProduk()" disabled>Beli Produk</button>
                </form>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    var eproduk = listProduk;
    document.getElementById("etalaseproduk").innerHTML = eproduk.html;

    runKebijakan();
    runmetodePembayaran();
    document.querySelectorAll('input[name="produk"]').forEach(radio => {
        radio.addEventListener('change', function() {
            var selectedProduct = this.value;
            updateProductInfo(selectedProduct);
        });
    });

document.getElementById('decreaseQuantity').addEventListener('click', function() {
    decreaseQuantity();
     
    var selectedProduct = document.querySelector('input[name="produk"]:checked').value;
     updateProductInfo(selectedProduct);
});

document.getElementById('increaseQuantity').addEventListener('click', function() {
    increaseQuantity();
     
        var selectedProduct = document.querySelector('input[name="produk"]:checked').value;
     updateProductInfo(selectedProduct);
});

    
}

function decreaseQuantity() {
    var quantityElement = document.getElementById('quantityValue');
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
}

function increaseQuantity() {
    var quantityElement = document.getElementById('quantityValue');
    var quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
}

function updateProductInfo(selectedProduct) {
    var quantityElement = document.getElementById('quantityValue');
    var quantity = parseInt(quantityElement.textContent);
    var product = produk[selectedProduct];
    var hargaRp = parseFloat(product.harga.Rp.replace(/\./g, '').replace(',', '.'));
    var hargaDollar = parseFloat(product.harga.dollar);
    var totalRp = hargaRp * quantity;
    var totalDollar = hargaDollar * quantity;
    
    document.getElementById('hargaProduk').setAttribute('data-harga-produk', `Rp${formatRupiah(product.harga.Rp)}/$${formatDollar(product.harga.dollar)}`);
    
    document.getElementById('namaProduk').setAttribute('data-title-produk', product.produk.nama);
    document.getElementById('thumbailProduk').src = product.gambarproduk.url;
    document.getElementById('namaProduk').innerText = product.produk.nama;
    document.getElementById('hargaProduk').innerHTML = `<p class="rupiah">${formatRupiah(totalRp)}</p>/<p class="dolar">${formatDollar(totalDollar)}</p>`;
}



function formatDollar(amount) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
 return formatter.format(amount).replace('$', '');
}

function formatRupiah(angka) {
    var number_string = angka.toString().replace(/\./g, '');
    var split = number_string.split(',');
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    
    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return rupiah;
}
function runKebijakan(){
document.querySelector('#kebijakan').addEventListener("change", function() {
  var kebijakanChecked = this.checked;
  var kirimPesanan = document.querySelector("#kirimPesanan");
  
  if (kebijakanChecked) {
    kirimPesanan.removeAttribute("disabled");
  } else {
    kirimPesanan.setAttribute("disabled", "disabled");
  }
  });
}
function pesananProduk() {
  var kebijakanChecked = document.getElementById("kebijakan").checked;
  if (kebijakanChecked) {
    var productName = document.getElementById("namaProduk").getAttribute("data-title-produk");
    var productImage = document.getElementById("thumbailProduk").getAttribute("src");
    var paymentMethod = document.querySelector('input[name="metodePembayaran"]:checked').value;
    var notes = document.getElementById("catatatanPembeli").value;
    var opsiMetode = document.querySelector('input[name="deliveryMethod"]:checked').value;
if (opsiMetode === "Telegram" || opsiMetode === "WhatsApp" || opsiMetode === "Email") {
     var urlWebpembeli = document.getElementById("urlWebpembeli").value;

  if (urlWebpembeli.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Silakan lengkapi semua input sebelum mengirim pesan!',
    });
    return;
  }
}
if (opsiMetode === "Telegram") {
  var namaInput = document.getElementById("namaInput").value;
  var alamatInput = document.getElementById("alamatInput").value;
  var emailInput = document.getElementById("emailInput").value;
  var nomorTelpInput = document.getElementById("nomorTelpInput").value;

  if (namaInput.trim() === '' || alamatInput.trim() === '' || emailInput.trim() === '' || nomorTelpInput.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Silakan lengkapi semua input sebelum mengirim pesan!',
    });
    return;
  }
}
var hargaProduk = document.getElementById("hargaProduk").getAttribute("data-harga-produk");
var totalhargaProduk = document.getElementById("hargaProduk").innerText;
var hargaArray = totalhargaProduk.split('/'); 
var rupiah = hargaArray[0].trim(); 
var dolar = hargaArray[1].trim(); 
var totalHarga = "Rp"+rupiah + "/" +"$"+ dolar;
var quantity = parseInt(document.getElementById("quantityValue").innerText);
    
    var message = "";

    if (opsiMetode === "WhatsApp") {
      message = "Saya ingin membeli ini:\n\n" +
                "-------------------------------------\n\n" +
"Nama Produk: " + productName + "\n\n" + 
"Jumlah: " + quantity + "\n\n" +
"Harga per Produk: " + hargaProduk + "\n\n" +
"Total Harga: " + totalHarga + "\n\n" +
"Metode Pembayaran: " + paymentMethod + "\n\n" +
"Web: " + urlWebpembeli+ "\n\n" +
"Catatan Tambahan:\n\n" + notes + "\n\n" + "\n\n" +                
"Thumbnail Produk: " + productImage + "\n\n" +
"-------------------------------------" + "\n\n" + "Mohon sertakan invoice";
    } else if (opsiMetode === "Email") {
      var subject = "Pesanan " + productName; 
      message = "Saya ingin membeli ini:\n\n" +
                "-------------------------------------\n\n" +
"Nama Produk: " + productName + "\n\n" + 
"Jumlah: " + quantity + "\n\n" +
"Harga per Produk: " + hargaProduk + "\n\n" +
"Total Harga: " + totalHarga + "\n\n" +
"Metode Pembayaran: " + paymentMethod + "\n\n" +
"Web: " + urlWebpembeli+ "\n\n" +
"Catatan Tambahan:\n\n" + notes + "\n\n" + "\n\n" +                
"Thumbnail Produk: " + productImage + "\n\n" +
"-------------------------------------" + "\n\n" + "Mohon sertakan invoice";
    } else if (opsiMetode === "Telegram") {
      message =
"Nama    : " + namaInput+ "\n\n" +
"Alamat  : " + alamatInput+ "\n\n" +
"Email   : " + emailInput+ "\n\n" +
"No.Telp : " + nomorTelpInput+ "\n\n" +
"#Saya_ingin_membeli_ini:\n\n" +
"-------------------------------------\n\n" +
"Nama Produk : " + productName + "\n\n" + 
"Jumlah : " + quantity + "\n\n" +
"Harga per Produk : " + hargaProduk + "\n\n" +
"Total Harga : " + totalHarga + "\n\n" +
"Metode Pembayaran : " + paymentMethod + "\n\n" +
"Web: " + urlWebpembeli+ "\n\n" +
"Catatan Tambahan :\n\n" + notes + "\n\n" + "\n\n" +                
"Thumbnail Produk : " + productImage + "\n\n" +
"-------------------------------------";
    }



    var linkRedirect = "";
    var tgbtoken = token_bot_telegram; 
    var tbGroup = id_grup_telegram;
    var gmailmu = gmailKamu;
    var nomormu = nomorKamu;
    if (opsiMetode === "WhatsApp") {
      linkRedirect = `https://wa.me/${nomormu}?text=` + encodeURIComponent(message);
      window.open(linkRedirect);
    } else if (opsiMetode === "Email") {
      linkRedirect = `mailto:${gmailmu}?subject=` + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
      window.open(linkRedirect);
    } else if (opsiMetode === "Telegram") {
  var file = document.getElementById("fileInput").files[0]; 
  var pesan = message;
  var xhr = new XMLHttpRequest();
  var formData = new FormData();
  formData.append("chat_id", tbGroup);
  formData.append("caption", pesan);
  if (file) {
    formData.append("document", file); 
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Silakan masukan ss/file bukti pembayaran terlebih dahulu!',
    });
    return;
  }

  Swal.fire({
    title: 'Mengirim pesan...',
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    }
  });

  var url = `https://api.telegram.org/bot${tgbtoken}/sendDocument`;
  xhr.open("POST", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Pesanan berhasil terkirim!, silahkan tunggu sampai admin mengkonfirmasi pesanan kamu',
        showConfirmButton: true,
        allowOutsideClick: false
      });
      console.log("Pesan dengan file berhasil dikirim ke grup Telegram!");
    }
  };
  xhr.send(formData);
}



  }
}

