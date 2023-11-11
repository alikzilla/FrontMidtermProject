export const teams = [
    {
        name: "FC HUNTERS",
        tag: "HUN",
        logoID: 1,
        score: 20,
        position: 4,
        photoID: 'hunters'
    },
    {
        name: "INTER FC",
        tag: "INT",
        logoID: 2,
        score: 1,
        position: 8,
        photoID: 'inter'
    },
    {
        name: "BARABAR",
        tag: "BRB",
        logoID: 3,
        score: 23,
        position: 2,
        photoID: 'barabar'
    },
    {
        name: "FC BAYGUYS",
        tag: "BGS",
        logoID: 4,
        score: 22,
        position: 3,
        photoID: 'bayguys'
    },
    {
        name: "EVOLUTION",
        tag: "EVO",
        logoID: 5,
        score: 18,
        position: 5,
        photoID: 'evolution'
    },
    {
        name: "HALAL JIGI",
        tag: "HJG",
        logoID: 6,
        score: 30,
        position: 1,
        photoID: 'halal'
    },
    {
        name: "SNOWKIDS",
        tag: "SNS",
        logoID: 7,
        score: 15,
        position: 6,
        photoID: 'snowkids'
    },
    {
        name: "SUNKAR",
        tag: "SKR",
        logoID: 8,
        score: 10,
        position: 7,
        photoID: 'sunkar'
    }
];

export function setMatchTable(matchList, nextMatchList) {
    let timeCount = 0;

    for (let i = 1; i < teams.length; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1 class="list_item">${teams[i - 1].tag}</h1>
            <img class="list_item" style="width:40px" src="styles/Assets/teams/${teams[i - 1].photoID}.png" alt="team-logo">
            <h1 class="list_item">${20 + timeCount}:00</h1>
            <img class="list_item" style="width:40px" src="styles/Assets/teams/${teams[i].photoID}.png" alt="team-logo">
            <h1 class="list_item">${teams[i].tag}</h1>
        `;
        timeCount++;
        matchList.appendChild(li);
    }

    timeCount = 0;

    for (let i = 1; i < teams.length / 2; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1 class="list_item">${teams[i - 1].tag}</h1>
            <img class="list_item" style="width:40px" src="styles/Assets/teams/${teams[i - 1].photoID}.png" alt="team-logo">
            <h1 class "list_item">${20 + timeCount}:00</h1>
            <img class="list_item" style="width:40px" src="styles/Assets/teams/${teams[i].photoID}.png" alt="team-logo">
            <h1 class="list_item">${teams[i].tag}</h1>
        `;
        timeCount++;
        nextMatchList.appendChild(li);
    }
}

export function setMatchTableFull(matchList, nextMatchList) {
    let timeCount = 0;

    for (let i = 1; i < teams.length; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1 class="list_item text">${teams[i - 1].name}</h1>
            <img class="list_item team_logo" src="styles/Assets/teams/${teams[i - 1].photoID}.png" alt="team-logo" width="40px">
            <h1 class="list_item text">${20 + timeCount}:00</h1>
            <img class="list_item team_logo" src="styles/Assets/teams/${teams[i].photoID}.png" alt="team-logo" width="40px">
            <h1 class="list_item text">${teams[i].name}</h1>
        `;
        timeCount++;
        matchList.appendChild(li);
    }

    timeCount = 0;

    for (let i = 1; i < teams.length / 2; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1 class="list_item text">${teams[i - 1].name}</h1>
            <img class="list_item team_logo" src="styles/Assets/teams/${teams[i - 1].photoID}.png" alt="team-logo" width="30px">
            <h1 class="list_item text">${20 + timeCount}:00</h1>
            <img class="list_item team_logo" src="styles/Assets/teams/${teams[i].photoID}.png" alt="team-logo" width="30px">
            <h1 class="list_item text">${teams[i].name}</h1>
        `;
        timeCount++;
        nextMatchList.appendChild(li);
    }
}

export function setScoreboard(scoreTable) {
    const sortedTeams = [...teams];
    sortedTeams.sort((a, b) => a.position - b.position);

    for (let i = 0; i < sortedTeams.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="score_1item"><p class="text">${sortedTeams[i].position}</p></td>
            <td class="score_2item"><img class="team_logo" src="styles/Assets/teams/${sortedTeams[i].photoID}.png" alt="" width="40px"><p class="text">${sortedTeams[i].name}</p></td>
            <td class="score_3item"><p class="text">${sortedTeams[i].score}</p></td>
        `;
        tr.classList.add("score_row");
        scoreTable.appendChild(tr);
    }
}

export function setClubs(clubs){
    for (let i = 0; i < teams.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="styles/Assets/teams/${teams[i].photoID}.png" alt="team_logo" width="150px">
            <div class="text__wrapper">
                <p class="club_name">${teams[i].name}</p>
            </div>
        `;
        div.classList.add("club");
        clubs.appendChild(div);
    }
}

export function setPlayers(players) {
    for (let i = 0; i < 11; i++) {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="header_card__wrapper">
                <h1>99<br>RW</h1>
                <img src="styles/Assets/players/messi.png" alt="messi" width="300px">
            </div>
            <h1>Messi</h1>
            <div class="card__wrapper">
                <div class="div1 stat">99 PAC</div>
                <div class="div2 stat">99 SHO</div>
                <div class="div3 stat">99 PAS</div>
                <div class="div4 stat">99 DRI</div>
                <div class="div5 stat">99 DEF</div>
                <div class="div6 stat">99 PHY</div>
            </div>
        `;
        div.classList.add("player");
        players.appendChild(div);
    }
}
