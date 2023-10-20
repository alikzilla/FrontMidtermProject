const date = new Date();
const month = date.toLocaleString('en-US', { month: 'long' });
const day = date.getDate();

const pDate = document.getElementById("current_date");
pDate.textContent = `${month} ${day}`;