'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function LoginHandler(body) {
    const cookieStore = cookies()
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
            cookieStore.set('session', data.token)
            console.log(cookieStore.get('session'))
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
}

export async function IsLogged() {
    const cookieStore = cookies()
    if (cookieStore.get('session')) {
        return true
    }
    return false
}

export async function getCookie() {
    const cookieStore = cookies()
    return cookieStore.get('session')
}

export async function logout(){
    const cookieStore = cookies()
    cookieStore.delete('session')
    return true
}