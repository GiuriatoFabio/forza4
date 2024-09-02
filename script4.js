function loadGrid() {
    let playerData = localStorage.getItem("playerData");

    if (!playerData) {
        document.getElementById("contenitore").innerHTML = "<div>Nessun dato disponibile</div>";
        return;
    }

    playerData = JSON.parse(playerData);

    let container = document.getElementById("contenitore");

    container.innerHTML = "";

    let headers = ["Nome Giocatore", "Vittorie", "Sconfitte"];
    headers.forEach(header => {
        let headerDiv = document.createElement("div");
        headerDiv.textContent = header;
        headerDiv.classList.add("header");
        container.appendChild(headerDiv);
    });

    playerData.forEach((player, index) => {

        let nomeDiv = document.createElement("div");
        nomeDiv.textContent = player.nome;
        nomeDiv.classList.add("casella");
        container.appendChild(nomeDiv);

        let vittorieDiv = document.createElement("div");
        vittorieDiv.textContent = player.vittorie;
        vittorieDiv.classList.add("casella");
        container.appendChild(vittorieDiv);

        let sconfitteDiv = document.createElement("div");
        sconfitteDiv.textContent = player.sconfitte;
        sconfitteDiv.classList.add("casella");
        container.appendChild(sconfitteDiv);
    });
}

document.addEventListener("DOMContentLoaded", loadGrid);