export async function listAssisted(body) {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/filterByData?pageNumber=${body}&pageSize=5`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function GetAssistedById(body) {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/${body}`, {
                method: 'GET',
                cache: 'no-store'
            });
            const data = await response.json()
            return data
    } catch (error) {
        console.log(error)
    }
}