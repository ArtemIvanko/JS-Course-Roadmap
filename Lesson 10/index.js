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
        cityObj[item] = item;
    })

    return cityObj;
}

getCityInfo(city);