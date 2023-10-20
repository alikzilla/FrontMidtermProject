//method for a showing current date

const date = new Date();
const month = date.toLocaleString('en-US', { month: 'long' });
const day = date.getDate();
const dayString = date.toLocaleString('en-US', { weekday: 'long'});

const pDate = document.getElementById("current_date");
pDate.textContent = `${month} ${day} ${dayString}`;

const nextDate = new Date();
nextDate.setDate(date.getDate() + 1);
const nextDay = nextDate.getDate();
const nextDayString = nextDate.toLocaleString('en-US', { weekday: 'long' });

const pNextDate = document.getElementById("next_date");
pNextDate.textContent = `${month} ${nextDay} ${nextDayString}`;

//teams and functions for team

const matchList = document.querySelector(".match_list");
const nextMatchList = document.querySelector(".next_match_list")

const teams = [
    {
        name: "FC HUNTERS",
        tag: "HUN",
        logoID: 1,
        score: 100,
        position: 1
    },
    {
        name: "INTER FC",
        tag: "INT",
        logoID: 2,
        score: 100,
        position: 1
    },
    {
        name: "FC MAIQUDUQ",
        tag: "MIQ",
        logoID: 3,
        score: 100,
        position: 1
    },
    {
        name: "FC BUYGUYS",
        tag: "BGS",
        logoID: 4,
        score: 100,
        position: 1
    },
    {
        name: "ORDA",
        tag: "ORD",
        logoID: 5,
        score: 100,
        position: 1
    },
    {
        name: "HALAL JIGI",
        tag: "HJG",
        logoID: 6,
        score: 100,
        position: 1
    },
    {
        name: "SNOWKIDS",
        tag: "SNS",
        logoID: 7,
        score: 100,
        position: 1
    },
    {
        name: "SUNKAR",
        tag: "SKR",
        logoID: 8,
        score: 100,
        position: 1
    }
];

function setMatchTable(){
    let timeCount = 0;
    for (let i = 1; i < teams.length; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1>${teams[i - 1].tag}</h1>
            <img src="styles/Assets/homepage/team_logo.png" alt="team-logo" width="35px">
            <h1>${20 + timeCount}:00</h1>
            <img src="styles/Assets/homepage/team_logo.png" alt="team-logo" width="35px">
            <h1>${teams[i].tag}</h1>
        `;
        timeCount++;
        matchList.appendChild(li);
    }
    timeCount = 0;
    for (let i = 1; i < teams.length / 2; i = i + 2) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h1>${teams[i - 1].tag}</h1>
            <img src="styles/Assets/homepage/team_logo.png" alt="team-logo" width="35px">
            <h1>${20 + timeCount}:00</h1>
            <img src="styles/Assets/homepage/team_logo.png" alt="team-logo" width="35px">
            <h1>${teams[i].tag}</h1>
        `;
        timeCount++;
        nextMatchList.appendChild(li);
    }
}

setMatchTable();