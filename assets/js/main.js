function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/img/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/img/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
`
}

let delay = 0;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
          ${games}
      </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML = 

  createCard(
    "24/11",
    "Quinta",
    createGame("brazil", "16:00", "cameroon") +
    createGame("brazil", "16:00", "cameroon")
) +
  createCard("28/11", "Segunda", createGame("", "", "")) +
  createCard("02/12", "Segunda", createGame("", "", ""))