let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "" || amigos.includes(nombre)) {
    input.value = "";
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  input.value = "";
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) return;
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 El amigo secreto es: " + amigos[indiceAleatorio];
}

