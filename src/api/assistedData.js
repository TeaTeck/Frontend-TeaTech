export async function GetAssistedData(id) {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/${id}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error('Erro ao buscar dados assistidos:', error);
    }
}