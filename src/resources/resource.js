import axios from "axios";
export const http = axios.create({
    baseURL: 'https://schoolmanagementsys-eoklznukbo.now.sh/students',
    timeout: 100000
})
