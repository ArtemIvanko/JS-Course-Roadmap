const setCityName = prompt('Enter city name');
const setCityArea = prompt('Enter city area');
const setCityPopulation = prompt('Enter city population');
const setCityMainStreet = prompt('Enter city main street');
const setCityMayorName = prompt('Enter city mayor name');

const city = [
    setCityName ? setCityName : 'Empty city name',
    setCityArea ? setCityArea : 'Empty city area',
    setCityPopulation ? setCityPopulation : 'Empty city population',
    setCityMainStreet ? setCityMainStreet : 'Empty city main street',
    setCityMayorName ? setCityMayorName : 'Empty city mayor name'
];

const getCityInfo = (city) => {
    const cityObj = {};

    city.map((item) => {
        if (city.indexOf(item) === 0) {
            cityObj.name = item;
        } else if (city.indexOf(item) === 1) {
            cityObj.area = item;
        } else if (city.indexOf(item) === 2) {
            cityObj.population = item;
        } else if (city.indexOf(item) === 3) {
            cityObj.mainStreet = item;
        } else if (city.indexOf(item) === 4) {
            cityObj.mayorName = item;
        } else {
            return 'No city info';
        }
    })

    return cityObj;
}

getCityInfo(city);