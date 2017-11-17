// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    // TODO: Use your own APPID for OpenWeatherMap.org
    config.params.APPID = '415abda2f5409b72a9e1d431897a0ac7';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});