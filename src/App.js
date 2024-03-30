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
          className="App-link text-4xl md:text-5xl lg:text-6xl text-center font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 py-3 px-6 rounded-full hover:bg-blue-100 block w-full md:inline-block md:w-auto"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis 2 años 
        </a>
        <br className="hidden md:inline"></br>
        <a className='text-4xl md:text-5xl lg:text-6xl text-center font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 py-3 px-6 rounded-full hover:bg-blue-100 block w-full md:inline-block md:w-auto' >
        Gabriel
        </a>
        <a className='text-4xl md:text-5xl lg:text-6xl text-center font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-105 py-3 px-6 rounded-full hover:bg-blue-100 block w-full md:inline-block md:w-auto' >
        Santino
        </a>
        <ReactAudioPlayer className="w-full md:w-auto mt-5"
            src="https://res.cloudinary.com/peruviansoftwaresolutions/video/upload/v1711204435/samples/petizo/CarMusic.mp3"  autoPlay  controls volume={0.2}
        />
        <div className="mb-4">
            <p className="mb-2">
                <strong className="block text-red text-xl ">Agregar Evento</strong>
            </p>
            <a href="https://calndr.link/e/P75N0DFPJ0?s=google" className="inline-block bg-yellow-500 hover:bg-green-700 scale-110 text-white font-bold py-1 px-2 rounded transition duration-300" style={{ textDecoration: 'none', fontSize: '36px' }}>
                Agregar
            </a>
        </div>


    </div>
  );
}

export default App;
