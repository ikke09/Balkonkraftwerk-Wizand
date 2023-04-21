import { API_PORT, API_BASE_URL, ENV } from '@env';
import Constants from 'expo-constants';

type Config = {
  ApiUrl: string;
  Env: 'dev' | 'prod';
};

const config: Config = {
  ApiUrl: `${API_BASE_URL}:${API_PORT}`,
  Env: ENV as 'dev' | 'prod',
};

const isProd = config.Env === 'prod';
const { manifest } = Constants;

if (!isProd && manifest !== null && manifest?.packagerOpts?.dev) {
  const apiUrl = `http://${manifest.debuggerHost?.split(`:`).shift()}:${API_PORT}`;
  config.ApiUrl = apiUrl;
}

export default config;
