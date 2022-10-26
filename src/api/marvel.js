import apiUrl from "../apiConfig";
import axios from  'axios'

export const marvelCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/marvels',
		data: {
			marvel: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const marvelIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/marvels',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const marvelShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/marvels/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const marvelUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/marvels/' + id,
		data: {
			marvel: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const marvelDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/marvels/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}