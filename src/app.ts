import { formulario } from "./scripts/selectores";
import { validarFormulario } from "./scripts/validarFormulario";

window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

export {};
