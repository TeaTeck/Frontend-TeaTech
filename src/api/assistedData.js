const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function GetAssistedData(id, token) {
    try {
        const response = await fetch(`${APIURL}/childAssisted/${id}`, {
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json()
        console.log(JSON.stringify(data))
        return data
    }
    catch (error) {
        console.error('Erro ao buscar dados assistidos:', error);
    }
}