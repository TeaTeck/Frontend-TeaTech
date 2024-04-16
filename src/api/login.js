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
    if (localStorage.getItem('session') != null) {
        return true
    } else {
        return false
    }
}