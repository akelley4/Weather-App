// Api for weather
const key = 'Y09glBlRSpGNCARolkgHQ6iQ6LtOVAJH';

//get weather information, location (id), directly after v1 in current conditions
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    // ? are the beginning of a query parameter
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

//get city information
const getCity = async (city) => {
    // base url of the api endpoint we want to make a request to
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    // query parameters, apikey and text to search for
    const query = `?apikey=${key}&q=${city}`;
    //waits until promise is resolved fetches resource
    const response = await fetch(base + query);
    const data = await response.json();
    // returns a promise, 0 gives us the top match
    return data[0];

};