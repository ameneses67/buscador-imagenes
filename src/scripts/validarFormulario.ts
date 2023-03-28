import { inputBusqueda } from "./selectores";
import { mostrarAlerta } from "./mostrarAlerta";
import { buscarImagenes } from "./buscarImagenes";

export function validarFormulario(e: Event) {
  e.preventDefault();

  if (inputBusqueda.value === "") {
    mostrarAlerta("Agrega un término de búsqueda");
    return;
  }

  buscarImagenes();
}
