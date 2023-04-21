const convertToDate = (dateInms: string | Date): string => {
    const date = new Date(Number(dateInms));

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${capitalizeFirst(new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(date.getDay()))}, ${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`
}

const capitalizeFirst = (string: string): string => {
    return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

export {
    convertToDate
}