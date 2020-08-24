import axios from 'axios';

export const apiOpenBanking = axios.create({
    baseURL: 'https://gateway.gr1d.io/sandbox/tecban/contas/v1',
    headers: {
        "X-Api-Key": '08d4308e-9a90-45a2-a2ae-42ed67984172'
    },
})

export const geofusion = axios.create({
    baseURL: 'HTTPS://gateway.gr1d.io/production/geofusion/rendaprovavel/v1',
    headers: {
        "X-Api-Key": '7cadeb7d-071b-4d2a-a65f-5e53a7096016'
    },
})


export const apiSuitAPI = axios.create({
    baseURL: 'http://localhost:3001'
})