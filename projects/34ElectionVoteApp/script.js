let candidateName = [
  {
    name: "Narendra Modi",
    symbol_unicode: "\u{1F4BB}", // 💻 Laptop
    votes: 3400,
  },
  {
    name: "Rahul Gandhi",
    symbol_unicode: "\u{1F4A1}", // 💡 Light Bulb
    votes: 1010,
  },
  {
    name: "Arvind Kejriwal",
    symbol_unicode: "\u{1F52D}", // 🔭 Telescope
    votes: 200,
  },
  {
    name: "Mamata Banerjee",
    symbol_unicode: "\u{1F4E6}", // 📦 Package
    votes: 1021,
  },
  {
    name: "Yogi Adityanath",
    symbol_unicode: "\u{1F4F0}", // 📰 Newspaper
    votes: 123,
  },
];

const candidatesEl = document.querySelector(".candidate-names");

candidateName.forEach((candidate) => {
  const candiEl = document.createElement("div");
  candiEl.classList.add("candidate");

  const candiInfoEl = document.createElement("div");
  candiInfoEl.classList.add("candidate-info");

  const candiNameEl = document.createElement("h2");
  candiNameEl.innerText = candidate.name;

  const candiSymEl = document.createElement("h2");
  candiSymEl.innerText = candidate.symbol_unicode;

  const indicatorEl = document.createElement("div");
  indicatorEl.classList.add("indicator");
  indicatorEl.innerText = "⬅️";

  const buttonEl = document.createElement("button");

  buttonEl.addEventListener("click", () => {
    clearVoteTable();
    candidate.votes++;
    showVotes();
    indicatorEl.style.filter = "hue-rotate(500deg)";
    setTimeout(() => {
      indicatorEl.style.filter = "hue-rotate(0deg)";
    }, 2000);
  });

  candiInfoEl.append(candiNameEl, candiSymEl);
  candiEl.append(candiInfoEl, indicatorEl, buttonEl);
  candidatesEl.appendChild(candiEl);
});

function clearVoteTable() {
  const tablerows = document.querySelectorAll("#tr");
  const tableEl = document.getElementById("table");
  tablerows.forEach((tr) => {
    tableEl.removeChild(tr);
  });
}

function showVotes() {
  candidateName.forEach((candidate) => {
    const tableEl = document.getElementById("table");

    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", "tr");
    const tabeldata1 = document.createElement("td");
    const tabeldata2 = document.createElement("td");

    tabeldata1.innerText = candidate.name;
    tabeldata2.innerText = candidate.votes;
    tableRow.append(tabeldata1, tabeldata2);

    tableEl.appendChild(tableRow);
  });
}

showVotes();
