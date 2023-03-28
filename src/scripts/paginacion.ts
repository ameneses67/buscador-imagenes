import { buscarImagenes, totalPaginas } from "./buscarImagenes";
import { limpiarHTML } from "./limpiarHTML";
import { paginacionDiv } from "./selectores";

let iterador: Generator<number>;
export let paginaActual = 1;

export const registrosPorPagina: number = 36;

export function calcularPaginas(total: number) {
  return Math.ceil(total / registrosPorPagina);
}

// generador es un iterador que sabe cuando ya acabó de iterar
// el generador va a registrar la cantidad de elementos de acuerdo a las páginas
export function* crearPaginador(total: number) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

export function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);

  limpiarHTML(paginacionDiv);

  while (true) {
    const { value, done } = iterador.next();
    if (done) return;

    // generar botón por cada elemento en el generador

    const numPagina = document.createElement("a");
    numPagina.href = "#";
    numPagina.dataset.pagina = value.toString();
    numPagina.textContent = value.toString();
    numPagina.classList.add(
      "siguiente",
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mt-4",
      "uppercase",
      "rounded"
    );

    numPagina.onclick = () => {
      paginaActual = value;

      buscarImagenes();
    };

    paginacionDiv.appendChild(numPagina);
  }
}
