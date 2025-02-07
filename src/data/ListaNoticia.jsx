import React from 'react';
import Noticia from './Noticia';

const noticias = [
  {
    titulo: "Dexter: Resurrection | Foto do set confirma início de filmagens da sequência",
    descricao: "A série Dexter: Resurrection, que continua a trama da obra original estrelada por Michael C. Hall, acaba de ganhar uma foto do set confirmando o início da produção. Confira abaixo a imagem, revelada pelo diretor Marcos Siega.",
    imagem: "https://cdn.ome.lt/hhnPa8ZeFM63NLkrtTJfKOevcB4=/987x0/smart/uploads/conteudo/fotos/OMELETE_CAPA_-_2025-01-10T113602.207.png", 
    link: "https://www.omelete.com.br/series-tv/dexter-resurrection-foto-do-set-confirma-filmagens"
  },
];

function ListaNoticia() {
  return (
    <section className="bg-gray-800 text-white p-8 lg:p-16 ">
      <h2 className="text-3xl font-bold text-red-500 mb-6">Últimas Notícias</h2>
      {noticias.map((noticia, index) => (
        <Noticia 
          key={index} 
          titulo={noticia.titulo} 
          descricao={noticia.descricao} 
          imagem={noticia.imagem} 
          link={noticia.link} 
        />
      ))}
    </section>
  );
}

export default ListaNoticia;