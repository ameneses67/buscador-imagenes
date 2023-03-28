export function limpiarHTML(elemento: HTMLElement) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}
