import './App.css';
import {VerifyCertificate} from "./components/VerifyCertificate";
import { BarcodeScanner } from "./components/BarcodeScanner";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <VerifyCertificate />
            {/* <BarcodeScanner /> */}
        </div>
      </Provider>
  );
}

export default App;
