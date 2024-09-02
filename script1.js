let form = document.getElementById("form2");
console.log("a");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let giocatore1 = document.getElementById("p1").value;
    let giocatore2 = document.getElementById("p2").value;

    localStorage.setItem("nomeGiocatore1", giocatore1);

    localStorage.setItem("nomeGiocatore2", giocatore2);
    window.location.href = "index2.html";
})


