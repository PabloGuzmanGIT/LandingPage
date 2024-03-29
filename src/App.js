import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  const playAudio = () => {
  
  };
  return (
    <div className="py-5 text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white-600 ring-1 ring-white-400 ring-offset-blue-300">
      


        <a
          className="App-link  text-4xl md:text-5xl lg:text-6xl text-center font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 py-3 px-6 rounded-full  hover:bg-blue-100"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis 2 años Gabriel Santino
        </a>
        <ReactAudioPlayer
            src="https://res.cloudinary.com/peruviansoftwaresolutions/video/upload/v1711204435/samples/petizo/CarMusic.mp3"  autoPlay  controls volume={0.2}
        />


    </div>
  );
}

export default App;
