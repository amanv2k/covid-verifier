import Quagga from "quagga"; // ES6
// const Quagga = require('quagga').default; // Common JS (important: default)
export const window.onload = () => {
    Quagga.decodeSingle({
        decoder: {
            readers: ["code_128_reader"]    // List of active readers
        },
        locate: true,                       // try to locate the barcode in the image
        src: './code128.png'                // or 'data:image/jpg;base64,' + data
    }, (result) => {
        if(result.codeResult) {
            console.log("result", result);
        } else {
            console.log("not detected");
        }
    });

    Quagga.onDetected((err, ret) => {
        console.log(err, ret)
    });
}