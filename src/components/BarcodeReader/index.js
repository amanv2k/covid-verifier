import React, { useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const BarcodeReader = () => {
  const [data, setData] = React.useState([]);
  const [validBarcodes, setValidBarcodes] = React.useState([]);
  const [isValid, setIsValid] = React.useState(null);

  const update = React.useCallback((err, result) => {
    if (result && !data.includes(result)) {
      setData([...data, result.text]);
    }
  }, [data, setData]);

  React.useEffect(() => {
    setIsValid(validBarcodes.includes(data[data.length - 1]));
  }, [validBarcodes, setIsValid, data]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const lines = data.split("\n").map(line => parseInt(line).toString());
      setValidBarcodes([...lines]);
    }

    reader.readAsText(file);
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleFile} />
      </div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={update}
      />
      <p>{data}</p>
      {isValid !== null ? <p>{isValid ? "Valid" : "Invalid"}</p> : ""}
    </>
  );
}

// export default BarcodeReader;