export function getCurrentDate() {
    const date = new Date();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    const dayString = date.toLocaleString('en-US', { weekday: 'long' });
    return `${month} ${day} ${dayString}`;
}

export function getNextDate(date) {
    const nextDate = new Date();
    nextDate.setDate(date.getDate() + 1);
    const month = nextDate.toLocaleString('en-US', { month: 'long' });
    const nextDay = nextDate.getDate();
    const nextDayString = nextDate.toLocaleString('en-US', { weekday: 'long' });
    return `${month} ${nextDay} ${nextDayString}`;
}