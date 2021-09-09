const citiesForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    const detailOfCity = data.detailOfCity;
    const weather = data.weather;

    details.innerHTML = `
        <h5 class="my-3">${detailOfCity.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const getCityData = async (city) => {
    const detailOfCity = await getCity(city);
    const weather = await getWeatherInfo(detailOfCity.Key);

    return { detailOfCity, weather };
}

citiesForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const city = citiesForm.city.value.trim();
    citiesForm.reset();

    getCityData(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})