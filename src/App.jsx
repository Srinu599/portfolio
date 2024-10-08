import React from 'react';
import './App.css'; // Import Tailwind CSS file
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
       <Portfolio/>
    </div>
  );
}

export const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 flex items-center justify-between">
      <div className="text-white text-2xl font-bold">My Profession</div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white hover:underline">Home</a></li>
        <li><a href="#about" className="text-white hover:underline">About</a></li>
        <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
        <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export const HeroSection = () => {
  return (
    <main className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.Z2xo89CYF1Jw1ypavxKOWQHaE8&pid=Api&P=0&h=180)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">I am a passionate web developer.</p>
      </div>
    </main>
  );
};

export default App;
