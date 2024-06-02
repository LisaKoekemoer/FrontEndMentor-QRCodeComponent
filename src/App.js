import './App.css';
import qr from './images/image-qr-code.png';

function App() {
  return (
    <>
      <div className='card-component'>
        <img src={qr} alt="QR Code for FrontEnd Mentor website"/>
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </>
  );
}

export default App;
