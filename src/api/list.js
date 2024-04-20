export async function listAssisted() {
    try {
        const response = await fetch(`http://localhost:5149/api/childAssisted/filterByData`, {
            method: 'GET'
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}