import React from 'react';
import Noticia from '../Noticia';

const noticias1 = [
  {
    titulo: "Dexter",
    descricao: "Dexter é uma série de TV que mostra um assassino em série, Dexter Morgan (Michael C. Hall), que trabalha como analista forense da polícia de Miami. A série começou a ser exibida em 2006 e encerra seu arco este ano, em 2013, na sua oitava temporada.",
    imagem: "https://media.fstatic.com/XKmVbUw2HM-GyYm7-XLQi3lrMCw=/full-fit-in/1200x600/filters:format(webp)/media/articles/main/2012/06/5cde707f-40d9-441a-8e15-a1b9033ad703.png",
    link: "https://www.omelete.com.br/dexter#:~:text=Dexter%20%C3%A9%20uma%20s%C3%A9rie%20de,2013%2C%20na%20sua%20oitava%20temporada.",
  },
];

function ListaNoticia1() {
  return (
    <section className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
        Últimas Notícias
      </h2>

      {/* Container flexível para alinhar e centralizar a notícia */}
      <div className="flex flex-col items-center">
        {noticias1.map((noticia, index) => (
          <Noticia
            key={index}
            titulo={noticia.titulo}
            descricao={noticia.descricao}
            imagem={noticia.imagem}
            link={noticia.link}
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
}

export default ListaNoticia1;