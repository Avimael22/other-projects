import logo from './logo.svg';
import './App.css';
import './component/qr_code/styles.css';
import QrCodeGenerator from './component/qr_code/index';

function App() {
  return (
    <div className="App">
      <QrCodeGenerator />
    </div>
  );
}

export default App;
