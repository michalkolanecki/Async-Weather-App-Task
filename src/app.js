const citiesForm = document.querySelector('form');

const getCityData = async (city) => {
    const detailOfCity = await getCity(city);
    const weather = await getWeatherInfo(detailOfCity.Key);

    return {
        detailOfCity: detailOfCity,
        weather: weather
    };
}

citiesForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const city = citiesForm.city.value.trim();
    citiesForm.reset();

    getCityData(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
})