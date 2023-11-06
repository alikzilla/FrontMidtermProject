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

const inputComment = document.querySelector('.textarea');
const submitComment = document.querySelector('.submit-button');
const comments = document.querySelector('.comments');

submitComment.addEventListener('click', () => {
    let comment = inputComment.value;
    if(comment !== ""){
        let section = document.createElement('section');
        section.classList.add('comments-block');
        section.innerHTML = 
            `<div class="comment-user">
                <img src="assets/main/user.png" alt="" width="50px">
                <div class="comment-user-data">
                    <p class="user-title"><b>Anonymous</b> says:</p>
                </div>
            </div>
            <div class="divisor"></div>
            <div class="comment-content-wrapper">
                <div class="comment-content">
                    ${comment}
                </div>
            </div>
            <button class="reply-button">Reply</button>
            `
        comments.appendChild(section);
    }else{
        alert('Type Something to leave a comment');
    }
    inputComment.value = '';
});