const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function listApplicatores(token) {
    try {
        const response = await fetch(`${APIURL}/employee/listApplicatores`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const data = await response.json()
        return data
    } catch (error) {
            console.error('Não foi possível estabelecer uma conexão com o servidor.');
    }
}