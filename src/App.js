import React from 'react';
import './App.css'; // Import Tailwind CSS (generated file)
import { NoiseTexture } from 'react-noise-texture';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="bg-black bg-opacity-75 rounded-lg p-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">React Tailwind Dark Theme</h1>
        <p className="text-lg">Welcome to your dark-themed React website with Tailwind CSS!</p>
        <NoiseTexture opacity={0.2} />
      </div>
    </div>
  );
}

export default App;
