import axios from 'axios';
import { base_URL } from './config';

export function deleteUser(id) {
    return axios.delete(`${base_URL}/api/users/${id}`);
};