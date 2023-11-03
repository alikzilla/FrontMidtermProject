import { getCurrentDate, getNextDate } from './homepageModules/date.js';
import { setupPostHover } from './homepageModules/posts.js';
import { setMatchTable, setScoreboard } from './homepageModules/teams.js';

document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    const pDate = document.getElementById("current_date");
    pDate.textContent = getCurrentDate(date);

    const pNextDate = document.getElementById("next_date");
    pNextDate.textContent = getNextDate(date);

    setupPostHover();
});

const matchList = document.querySelector(".match_list");
const nextMatchList = document.querySelector(".next_match_list");
setMatchTable(matchList, nextMatchList);

const scoreTable = document.querySelector(".score_table");
setScoreboard(scoreTable);