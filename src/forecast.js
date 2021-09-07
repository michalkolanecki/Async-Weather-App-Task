const key = 'LBzjvxs9k0p7AytB7gNItXTNyGuTuXt9';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
};

getCity('warszawa')
    .then(data => console.log(data))
    .catch(err => console.log(err));