import { hasCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';

export default async function loginHandler(req, res) {
    const response = await fetch(`http://localhost:5149/api/user/login?email=${req.email}&password=${req.password}`, {
        method: 'POST'
    });
    const data = await response.json();
    const token = data.token;

    if (token) {
        setCookie('login', token['access']);
        console.log(hasCookie('login'))
    }
}