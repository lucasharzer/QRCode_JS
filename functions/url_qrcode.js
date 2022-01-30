const QRCode = require("qrcode")


function Show_URL_QRCode() {

    console.log("\nMostrar a url do QRCode: \n")

    QRCode.toDataURL("função mostrar URL do QRCode", function (err, qrc) {
        console.log(qrc)
    })
}


module.exports = Show_URL_QRCode;