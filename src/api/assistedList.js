const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function listAssisted(pageNumber, token, key) {
    try {
        const response = await fetch(`${APIURL}/childAssisted/filterByData?data=${key}&pageNumber=${pageNumber}&pageSize=5`, {
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