import axios from 'axios';

const baseURL = 'http://10.13.1.104:8080';

const http = (headers) => {
	return axios.create({ baseURL, headers });
};

class Service {
	// LOGIN SERVICES
	loginAccount(body) {
		// Logear
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		};
		const https = http(headers);
    return https.post('login/autenticar', JSON.stringify(body));
	}
}

export const services = new Service();
