import axios from "axios";

const baseUrl = `https://fazzpay-rose.vercel.app/auth`;

export const login = (body) => axios.post(`${baseUrl}/login`, body);

export const logout = () => axios.post(`${baseUrl}/logout`);
