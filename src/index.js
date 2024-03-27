import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pics from './Pics';
import Invite from './Invite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <div 
          className="bg-fixed "
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url(https://wallpapercave.com/wp/wp8679390.jpg)',
            //height: '100vh', // Set height to 100% of the viewport height
            backgroundSize: '100% auto', // Make the background image fit within the container without stretching or cropping
            backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
            backgroundPosition: 'center', // Center the background image
            
          }}
    >  
    <App />
  
    
    <Pics/>
    <Invite/>
    
    
    </div>


  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
