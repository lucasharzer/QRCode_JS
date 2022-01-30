// npm install --save qrcode

const QRCode = require("qrcode")

function Show_QRCode() {

    console.log("Mostrar o QRCode: ")

    QRCode.toString("Função mostrar QRCode", function (err, url) {
        console.log(url)
    })
}


module.exports = Show_QRCode;