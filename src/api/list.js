export async function listAssisted(body) {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/filterByData?pageNumber=${body}&pageSize=8`, {
            method: 'GET',
            cache: 'no-store'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}