import type { Imagenes } from "./buscarImagenes";
import { limpiarHTML } from "./limpiarHTML";
import { imprimirPaginador } from "./paginacion";
import { resultado } from "./selectores";

export function mostrarImagenes(imagenes: Imagenes[]) {
  limpiarHTML(resultado);

  imagenes.forEach((imagen) => {
    const { likes, views, largeImageURL, webformatURL } = imagen;

    resultado.innerHTML += `  
      <div class="bg-white flex flex-col rounded-md overflow-hidden shadow-xl container mx-auto">
        <img class="h-64 object-cover" src="${webformatURL}" />
        <div class="p-4 flex flex-col justify-between grow">
          <div>
            <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
            <p class="font-bold">${views} <span class="font-light">Veces vista</span></p>
          </div>
          <a class="block w-full bg-blue-800 hover:bg-blue-900 text-white capitalize font-bold text-center rounded mt-5 py-1 transition duration-200 ease-in-out hover:shadow-lg" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver imagen</a>
        </div>
      </div>
    `;
  });

  imprimirPaginador();
}
