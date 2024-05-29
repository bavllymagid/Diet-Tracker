const getLocalData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setLocalData = (key, data) =>{
    localStorage.setItem(key, JSON.stringify(data));
}

const sumAllCalories = (date) => {
    const keys = Object.keys(localStorage);
    let sum = 0;
    keys.forEach(key => {
        if (key.includes(date)) {
            const meals = getLocalData(key);
            Object.values(meals).forEach(cal => {
                sum += cal;
            });
        }
    });
    return sum;
}

const saveCaloriesHistory = (date, id) => {
    // get all caloris sum and save it local storage with the date as key
    const sum = sumAllCalories(date);
    setLocalData(date, sum);
    // get the data from local storage as map and save it to the local storage with id history
    const history = getLocalData('history');
    if (history === null) {
        setLocalData('history', { [date]: sum });
    }
    else{
        history[date] += sum;
        setLocalData('history', history);
    }
}

export { getLocalData, setLocalData, sumAllCalories };