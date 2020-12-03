import axios from 'axios';
import { base_URL } from './config';

export function fetchUsers() {
    return axios.get(`${base_URL}/api/users`);
};