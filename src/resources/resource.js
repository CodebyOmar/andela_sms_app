import axios from "axios";
export const http = axios.create({
    baseURL: 'https://schoolmanagementsys-cqntiloreq.now.sh/students',
    timeout: 100000
})
