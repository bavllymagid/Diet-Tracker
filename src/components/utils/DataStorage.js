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

const saveCaloriesHistory = () => {
    let date = new Date().toISOString().split('T')[0];
    let sum = sumAllCalories(date);
    console.log('Sum:', sum);
    const history = getLocalData('history');
    if (history === null) {
        setLocalData('history', { [date]: sum });
    }
    else{
        history[date] = sum;
        setLocalData('history', history);
    }
}

export { getLocalData, setLocalData, sumAllCalories, saveCaloriesHistory };