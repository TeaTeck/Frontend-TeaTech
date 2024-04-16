import { IsLogged } from '@/api/login'
import { redirect } from 'next/navigation'

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