import axios from 'axios'

const axiosConfig = {
    baseURL:
        'https://freecurrencyapi.net/api/v2/latest?apikey=20caede0-5d29-11ec-8c6a-59b4ae086201',
    timeout: 30000,
}

export default {
    getUsdRate: function (currency) {
        return axios.get(`${axiosConfig.baseURL}` + '&base_currency=USD')
    },
}
