import QR from '../images/qrcode_126251211_d4d64bca3789febfbc025c40d37857ef.svg';
import './App.css'

function App() {

  return (
    <div>
      <div className='qr-code-header'>
        <h1>QR Code Scanner Application </h1>
      </div>
      <div className='qr-code-container'>
        <div className='qr-inner-container'>
          <img src={QR}/>
          <h1>Scan Me!</h1>
        </div>
      </div>
    </div>
  )
}

export default App
