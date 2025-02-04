const Noticia = ({ titulo, descricao, imagem, link }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
            <img src={imagem} alt={titulo} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-red-400">{titulo}</h3>
            <p className="text-gray-300 mt-2">{descricao}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition mt-3 inline-block">
                Leia mais →
            </a>
        </div>
    );
};

export default Noticia;