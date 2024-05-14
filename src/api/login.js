import { redirect } from 'next/navigation'

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function LoginHandler(body) {
    try {
        const response = await fetch(`${APIURL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const data = await response.json()
        if (response.status == 200) {
            localStorage.setItem('session', data.token)
            console.log(localStorage.getItem('session'))
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export function IsLogged() {
    if (localStorage.getItem('session')) {
        return true
    }

    return false
}

export function NotLoggedRedirect() {
    const result = IsLogged();

    if (result == false) {
        redirect('/login')
    }
}