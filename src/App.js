import React from "react";
import './App.css';
import { VerifyCertificate } from "./components/VerifyCertificate";
// import { BarcodeScanner } from "./components/BarcodeScanner";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const [app, setApp] = React.useState(null);

  const getPage = () => {
    switch (app) {
      case 0:
        return <VerifyCertificate />
      case 1:
        return <></>
      case null:
      default:
        return <div>Please select the app.</div>
    }
  }

  return (
    <Provider store={store}>
      <button onClick={() => setApp(0)}>Verify Certificate</button>
      <button onClick={() => setApp(1)}>Barcode Scanner</button>
      <div className="App">
        {getPage()}
        {/* <BarcodeScanner /> */}
      </div>
    </Provider>
  );
}

export default App;
