const key = 'LBzjvxs9k0p7AytB7gNItXTNyGuTuXt9';

const getWeatherInfo = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
``
    return data[0];
}

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
};

getCity('warszawa')
    .then(data => {
        return getWeatherInfo(data.Key);
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));