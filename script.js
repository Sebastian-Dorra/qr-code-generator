function generateQRCode() {
    let link = document.getElementById("linkInput").value;

    if (!link) {
        alert("Por favor, insira um link válido!");
        return;
    }

    // Corrigir links do Google Drive para acesso direto
    if (link.includes("drive.google.com")) {
        link = link.replace("file/d/", "uc?id=").split("/view")[0];
    }

    let qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = ""; // Limpar o QR Code anterior

    let qr = new QRCode(qrCodeContainer, {
        text: link,
        width: 256,
        height: 256
    });

    document.getElementById("downloadBtn").style.display = "block";
}

function downloadQRCode() {
    let canvas = document.querySelector("#qrCodeContainer canvas");
    let link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}
