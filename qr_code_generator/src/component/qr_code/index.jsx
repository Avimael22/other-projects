import {useState} from 'react';
import {QRCode} from 'react-qr-code';

{/* Wifi value format: WIFI:T:WPA;S:MyHomeNetwork;P:MySecurePassword123;H:false;; */}

function QrCodeGenerator(){
    const [qrValue, setqrValue] = useState('');
    const [ ssid, setSsid ] = useState('');
    const [ wpa, setWpa ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ hidden, setHidden ] = useState(false);

    const generateQrCode = () => {
        setqrValue(`WIFI:T:${wpa};S:${ssid};P:${password};H:${hidden}`)
    }

    return <div className="content-wrapper">
        <div className="input-container">
            <input type="text" placeholder="wifi name" onChange={(e) => setSsid(e.target.value)}/>
            <input type="text" placeholder="security type eg. WPA" onChange={(e) => setWpa(e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="hidden" onChange={(e) => setHidden(e.target.value)}/>
        </div>
        <button onClick={() => generateQrCode()} className="generate-btn">Generate Code!</button>
        <div className="qr-image-container">
            <h1>Join Wifi Network: {ssid}</h1>
            <QRCode id="qr-code" value={qrValue} size={300}/>
        </div>
    </div>

}
export default QrCodeGenerator;