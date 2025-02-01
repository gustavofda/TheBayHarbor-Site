import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import dexterImage from './assets/dexterImage.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Menu */}
      <nav className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-6 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Menu no desktop */}
          <div className="lg:flex justify-center items-center hidden w-full">
            <ul className="flex space-x-8">
              <li>
                <Link to="/dexter2006" className="text-lg hover:text-red-400 transition duration-300">Dexter (2006)</Link>
              </li>
              <li>
                <Link to="/newblood" className="text-lg hover:text-red-400 transition duration-300">Dexter: New Blood</Link>
              </li>
              <li>
                <Link to="/originalsin" className="text-lg hover:text-red-400 transition duration-300">Dexter: Original Sin</Link>
              </li>
              <li>
                <Link to="/resurrection" className="text-lg hover:text-red-400 transition duration-300">Dexter: Resurrection</Link>
              </li>
            </ul>
          </div>

          {/* Ícone de "Menu" no mobile */}
          <div className="lg:hidden flex items-center space-x-2 mt-2" onClick={toggleMenu}>
            <span className="text-4xl">&#9776;</span>
            <span className="font-semibold">Menu</span>
          </div>
        </div>

        {/* Menu móvel */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pl-4`}>
          <ul className="space-y-4">
            <li>
              <Link to="/dexter2006" className="text-lg hover:text-red-400 transition duration-300">Dexter (2006)</Link>
            </li>
            <li>
              <Link to="/newblood" className="text-lg hover:text-red-400 transition duration-300">Dexter: New Blood</Link>
            </li>
            <li>
              <Link to="/originalsin" className="text-lg hover:text-red-400 transition duration-300">Dexter: Original Sin</Link>
            </li>
            <li>
              <Link to="/resurrection" className="text-lg hover:text-red-400 transition duration-300">Dexter: Resurrection</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16">
        <div className="flex-shrink-0 w-full lg:w-1/3 mb-8 lg:mb-0">
          <img src={dexterImage} alt="Dexter" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
        </div>

        <div className="lg:w-2/3 lg:ml-16 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            Site Oficial da Franquia "Dexter"
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 text-gray-300 leading-relaxed">
            Dexter Morgan (Michael C. Hall) é adotado aos três anos de idade por Harry Morgan (James Remar) e Doris (Kathrin Middleton),
            depois de ter se tornado órfão. Após detectar sua tendência homicida, o pai de Dexter decide ensinar a ele um código no intuito
            de canalizar a raiva do filho para situações mais propícias à violência. Nesta nova lógica, Dexter deve matar apenas assassinos
            de pessoas inocentes com a condição de provar sua culpa. Ele inicia o desenvolvimento de diversas estratégias usando seu
            conhecimento e a experiência para realizar sua nova função.
          </p>
          
          {/* Texto acima do botão */}
          <h2 className="mt-8 text-2xl font-semibold text-red-500">Assista ao primeiro episódio grátis!</h2>

          {/* Vídeo aparece acima do botão */}
          {isVideoOpen && (
            <div className="mt-6 relative">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/j5GxlFxdcbQ?si=AL6mGPPYVnMFMD91"
                title="Dexter Episódio 1"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
              {/* Botão de fechar */}
              <button
                className="absolute -top-4 -right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition"
                onClick={() => setIsVideoOpen(false)}
              >
                ✖
              </button>
            </div>
          )}

          {/* Botão para assistir */}
          {!isVideoOpen && (
            <button
              className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300"
              onClick={() => setIsVideoOpen(true)}
            >
              Assistir Episódio 1
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
