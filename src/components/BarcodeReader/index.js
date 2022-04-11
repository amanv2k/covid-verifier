import React, { useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const BarcodeReader=()=> {
  const [data, setData] = React.useState([]);

  const update = React.useCallback((err, result) => {
    if (result && !data.includes(result)) setData([...data, result.text]);
  }, data);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={update}
      />
      <p>{data}</p>
    </>
  );
}

// export default BarcodeReader;