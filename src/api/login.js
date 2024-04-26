import { redirect } from 'next/navigation'

export async function LoginHandler(userData) {
    try {
        const response = await fetch(`http://localhost:5149/api/user/login?email=${userData.email}&password=${userData.password}`, {
            method: 'POST'
        });

        const data = await response.json()
        if (response.status == 200) {
            localStorage.setItem('session', data.token)
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export function IsLogged() {
    const Session = typeof window !== 'undefined' ? window.localStorage : null;

    if (Session && Session.getItem('session') != null) {
        return true
    } else {
        return false
    }
}

export function IsLoggedRedirect() {
    const result = IsLogged();

    if (result == true) {
        redirect('/')
    }
}

export function NotLoggedRedirect() {
    const result = IsLogged();

    if (result == false) {
        redirect('/login')
    }
}