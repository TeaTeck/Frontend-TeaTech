const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function UpdateProgram(body, token, id) {
    console.log(JSON.stringify(body))
    const response = await fetch(`${APIURL}/program/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });

    return response.status
}
