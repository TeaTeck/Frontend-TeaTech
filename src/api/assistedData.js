export async function GetAssistedData(id, token) {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/${id}`, {
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