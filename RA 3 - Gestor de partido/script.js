document.addEventListener("DOMContentLoaded", () => {
    let golesEquipo1 = 0;
    let golesEquipo2 = 0;
    const estadoPartido = document.getElementById("estadoPartido");

    document.getElementById("golEquipo1").addEventListener("click", () => {
        golesEquipo1++;
        actualizarMarcador();
    });

    document.getElementById("golEquipo2").addEventListener("click", () => {
        golesEquipo2++;
        actualizarMarcador();
    });

    document.getElementById("reiniciarMarcador").addEventListener("click", () => {
        golesEquipo1 = 0;
        golesEquipo2 = 0;
        actualizarMarcador();
        estadoPartido.textContent = "El marcador ha sido reiniciado.";
    });

    function actualizarMarcador() {
        document.getElementById("equipo1").textContent = `Equipo 1: ${golesEquipo1}`;
        document.getElementById("equipo2").textContent = `Equipo 2: ${golesEquipo2}`;
        estadoPartido.textContent = `Marcador actualizado: ${golesEquipo1} - ${golesEquipo2}`;
    }

    const jugadores = [];
    const formJugador = document.getElementById("formJugador");
    const listaJugadores = document.getElementById("listaJugadores");

    formJugador.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombreJugador").value.trim();

        if (nombre && !jugadores.includes(nombre)) {
            jugadores.push(nombre);
            actualizarListaJugadores();
            document.getElementById("nombreJugador").value = '';
        } else {
            alert("Nombre inválido o ya existe.");
        }
    });

    function actualizarListaJugadores() {
        listaJugadores.innerHTML = '';
        jugadores.forEach((jugador, index) => {
            const li = document.createElement("li");
            li.textContent = jugador;
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.addEventListener("click", () => {
                jugadores.splice(index, 1);
                actualizarListaJugadores();
            });
            li.appendChild(btnEliminar);
            listaJugadores.appendChild(li);
        });
    }

});
