import axios from 'axios';

import { backendUrl } from 'config';

const httpClient = axios.create({
  baseURL: undefined,
  // baseURL: backendUrl,
});

export default httpClient;
