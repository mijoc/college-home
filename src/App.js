import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1 className="text-xl font-bold">RP Ngoma College</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section id="home" className="text-center p-10">
        <h2 className="text-3xl font-bold">Welcome to RP Ngoma College</h2>
        <p className="mt-2 text-lg">Providing quality education and skills for the future.</p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-8 text-center bg-gray-200">
        <h3 className="text-2xl font-semibold">Gallery</h3>
        <div className="flex justify-center gap-4 mt-4">
  <img src="/images/1.jpg" alt="College Image 1" className="w-24 h-16 " />
  <img src="/images/1.jpg" alt="College Image 2" className="w-24 h-16  rounded-lg shadow-md" />
  <img src="/images/3.png" alt="College Image 3" className="w-24 h-16  rounded-lg shadow-md" />
</div>



      </section>
    </div>
  );
}

export default App;
