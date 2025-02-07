import React from 'react';

function Noticia({ titulo, descricao, imagem, link }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4 w-90 h-auto">
      <img src={imagem} alt={titulo} className="w-full h-68 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold mt-4">{titulo}</h3>
      <p className="text-gray-300 mt-2">{descricao}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-500 mt-4 inline-block">
        Ler mais
      </a>
    </div>
  );
}

export default Noticia;