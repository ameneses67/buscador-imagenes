import { mostrarImagenes } from "./mostrarImagenes";
import {
  calcularPaginas,
  paginaActual,
  registrosPorPagina,
} from "./paginacion";
import { inputBusqueda } from "./selectores";

export let totalPaginas: number;

export interface Imagenes {
  likes: number;
  views: number;
  largeImageURL: string;
  webformatURL: string;
}

export async function buscarImagenes() {
  const terminoBusqueda = inputBusqueda.value;

  const key = "8726170-5d58a16fba3491d35dafe5c15";
  const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&image_type=photo&per_page=${registrosPorPagina}&page=${paginaActual}`;

  // fetch(url)
  //   .then(
  //     (respuesta): Promise<{ hits: Imagenes[]; totalHits: number }> =>
  //       respuesta.json()
  //   )
  //   .then((resultado) => {
  //     totalPaginas = calcularPaginas(resultado.totalHits);
  //     mostrarImagenes(resultado.hits);
  //   });

  //async await
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    totalPaginas = calcularPaginas(resultado.totalHits);
    mostrarImagenes(resultado.hits);
  } catch (error) {
    console.log(error);
  }
}
