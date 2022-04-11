import React from "react";
import './App.css';
import { VerifyCertificate } from "./components/VerifyCertificate";
import { BarcodeReader } from "./components/BarcodeReader";
// import { BarcodeScanner } from "./components/BarcodeScanner";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CustomButton } from "./components/CustomButton";


function App() {
  const [app, setApp] = React.useState(null);

  const getPage = () => {
    switch (app) {
      case 0:
        return <VerifyCertificate />
      case 1:
        return <BarcodeReader/>
      case null:
      default:
        return <div>Please select the app.</div>
    }
  }

  return (
    <Provider store={store}>
      <div id="menu"><div id="menu"><CustomButton className="green-btn" onClick={() => setApp(0)}>
        <span>Verify Certificate</span>
      </CustomButton></div>
      {/* <button onClick={() => setApp(0)}>Verify Certificate</button> */}
      <div id="menu"><CustomButton className="green-btn" onClick={() => setApp(1)}>
        <span>Barcode Scanner</span>
      </CustomButton></div>
      {/* <button onClick={() => setApp(1)}>Barcode Scanner</button> */}
      </div>
      <div className="App">
        {getPage()}
        {/* <BarcodeScanner /> */}
      </div>
    </Provider>
  );
}

export default App;
