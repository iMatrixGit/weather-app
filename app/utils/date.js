const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const prefixWithZero = num => String(num).length <= 1 ? `0${num}` : num;

const parseDate = timestamp => new Date(Number(timestamp) * 1000);

export const getDayFullName = timestamp => days[parseDate(timestamp).getDay()];

export const getFormattedDate = timestamp => {
    const date = parseDate(timestamp);
    const day = prefixWithZero(date.getDate());
    const month = prefixWithZero(date.getMonth());
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};