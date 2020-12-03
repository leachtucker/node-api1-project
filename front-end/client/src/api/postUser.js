import axios from 'axios';
import { base_URL } from './config';

export function postUser(user) {
    return axios.post(`${base_URL}/api/users`, user);
};