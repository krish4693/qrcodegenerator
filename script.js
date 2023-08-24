let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText")
let prompt = document.getElementById("prompt")
async function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = await "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error')
        }, 1000)
    }
    
}

async function downloadQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        const response = await fetch(qrImage.src)
        const blob = await response.blob();
        const downloadLink = document.createElement("a")
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "qrcode.jpg";
        downloadLink.click()
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error')
        }, 1000)
    }
    

}
