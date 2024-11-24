const players = [
    { name: "Alice", horolezci: 1450, prsi: 2000, slovniFotbal: 1200, dama: 800, lode: 2500 },
    { name: "Bob", horolezci: 1700, prsi: 900, slovniFotbal: 2500, dama: 1500, lode: 1900 },
    { name: "Charlie", horolezci: 900, prsi: 1100, slovniFotbal: 800, dama: 600, lode: 2900 },
    { name: "Diana", horolezci: 2300, prsi: 1300, slovniFotbal: 2200, dama: 2000, lode: 1500 },
    { name: "Eve", horolezci: 1100, prsi: 1800, slovniFotbal: 1700, dama: 900, lode: 2000 },
    { name: "Frank", horolezci: 2600, prsi: 1400, slovniFotbal: 1100, dama: 1200, lode: 1800 },
    { name: "Grace", horolezci: 1200, prsi: 2100, slovniFotbal: 1500, dama: 1000, lode: 1700 },
    { name: "Henry", horolezci: 900, prsi: 700, slovniFotbal: 3000, dama: 1400, lode: 900 },
    { name: "Ivy", horolezci: 2000, prsi: 2200, slovniFotbal: 800, dama: 1800, lode: 1300 },
    { name: "Jack", horolezci: 1800, prsi: 2300, slovniFotbal: 2000, dama: 1700, lode: 600 },
    { name: "Kara", horolezci: 700, prsi: 1900, slovniFotbal: 1400, dama: 2100, lode: 800 },
    { name: "Liam", horolezci: 2500, prsi: 1700, slovniFotbal: 900, dama: 600, lode: 1100 },
    { name: "Mia", horolezci: 1400, prsi: 2000, slovniFotbal: 1900, dama: 2500, lode: 300 },
    { name: "Noah", horolezci: 1700, prsi: 700, slovniFotbal: 2600, dama: 800, lode: 2200 },
    {
        name: "Olivia",
        horolezci: 3000,
        prsi: 1200,
        slovniFotbal: 1000,
        dama: 1700,
        lode: 1500,
    },
    { name: "Paul", horolezci: 1500, prsi: 2300, slovniFotbal: 700, dama: 2000, lode: 1800 },
    { name: "Quinn", horolezci: 1100, prsi: 1900, slovniFotbal: 1400, dama: 1000, lode: 2300 },
    { name: "Uma", horolezci: 800, prsi: 3000, slovniFotbal: 1100, dama: 2000, lode: 1600 },
    { name: "Victor", horolezci: 2600, prsi: 1000, slovniFotbal: 2200, dama: 700, lode: 1700 },
    { name: "Wendy", horolezci: 1900, prsi: 2500, slovniFotbal: 1200, dama: 600, lode: 1800 },
    { name: "Xander", horolezci: 1500, prsi: 800, slovniFotbal: 3000, dama: 1400, lode: 200 },
    { name: "Yara", horolezci: 1700, prsi: 900, slovniFotbal: 2700, dama: 1500, lode: 1000 },
    { name: "Zane", horolezci: 900, prsi: 2000, slovniFotbal: 1600, dama: 1300, lode: 2200 },
    { name: "Aaron", horolezci: 2500, prsi: 2100, slovniFotbal: 1400, dama: 1000, lode: 1900 },
];

const tableRows = document.querySelectorAll("tr");
const tbody = document.querySelector("tbody");

const gameSelect = document.getElementById("game-select");
const search = document.getElementById("search");

function updateRow(top20, activeGame, index) {
    const player = top20[index - 1];
    tbody.children[index - 1].classList.remove("in");
    tbody.children[index - 1].classList.add("out");
    setTimeout(() => {
        tbody.removeChild(tbody.children[index - 1]);
    }, 450);
    setTimeout(() => {
        const row = document.createElement("tr");

        const top = document.createElement("td");
        top.textContent = index;
        const name = document.createElement("td");
        name.textContent = player.name;
        const mmr = document.createElement("td");
        mmr.textContent = `${player[activeGame]}b`;

        row.appendChild(top);
        row.appendChild(name);
        row.appendChild(mmr);

        row.classList.remove("out");
        row.classList.add("in");
        tbody.insertBefore(row, tbody.children[index - 1]);
    }, 450);
}

function removeExtra() {
    let i = 1;
    for (let child of tbody.children) {
        (function (i) {
            // Start the "out" animation
            setTimeout(() => {
                child.classList.remove("in"); // Remove 'in' to trigger the animation
                child.classList.add("out"); // Add 'out' to trigger fade-out or other animation
            }, i * 50); // Stagger the animations
        })(i);
        i++;
    }

    setTimeout(() => {
        for (let i = tbody.children.length - 1; i >= 0; i--) {
            tbody.removeChild(tbody.children[i]);
        }
    }, 20 * 50 + 350);
}
function appendTop20(top20, activeGame) {
    let pos = 1;
    for (let player of top20) {
        const row = document.createElement("tr");

        const top = document.createElement("td");
        top.textContent = pos;
        const name = document.createElement("td");
        name.textContent = player.name;
        const mmr = document.createElement("td");
        mmr.textContent = `${player[activeGame]}b`;

        row.appendChild(top);
        row.appendChild(name);
        row.appendChild(mmr);

        setTimeout(() => {
            row.classList.remove("out");
            row.classList.add("in");
            tbody.appendChild(row);
        }, (pos + 1) * 10);

        pos++;
    }
}

let activeGame = "horolezci";
appendTop20(players.sort((a, b) => b[activeGame] - a[activeGame]).slice(0, 20), activeGame);

gameSelect.addEventListener("click", (e) => {
    if (e.target.value === activeGame) {
        return;
    }

    activeGame = e.target.value;
    const top20 = players.sort((a, b) => b[e.target.value] - a[e.target.value]).slice(0, 20);

    /*
    removeExtra(top20);
    setTimeout(() => {
        appendTop20(top20, activeGame);
    }, 20 * 50 + 350);
    */
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    const shuffledNumbers = shuffleArray(numbers);

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            updateRow(top20, activeGame, shuffledNumbers[i]);
        }, i * 50);
    }
});
