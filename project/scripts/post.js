import { getCurrentDate, getNextDate } from './modules/date.js';
import { setMatchTable, setScoreboard } from './modules/teams.js';

document.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    const pDate = document.getElementById("current_date");
    pDate.textContent = getCurrentDate(date);

    const pNextDate = document.getElementById("next_date");
    pNextDate.textContent = getNextDate(date);
});

const matchList = document.querySelector(".match_list");
const nextMatchList = document.querySelector(".next_match_list");
setMatchTable(matchList, nextMatchList);

const scoreTable = document.querySelector(".score_table");
setScoreboard(scoreTable);

const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBar')

const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

hamburger.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);