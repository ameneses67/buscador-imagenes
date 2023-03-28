import { formulario } from "./selectores";

export function mostrarAlerta(mensaje: string) {
  const existeAlerta = document.querySelector(".alerta");

  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "alerta",
      "bg-red-100",
      "border",
      "border-red-700",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.textContent = mensaje;

    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
