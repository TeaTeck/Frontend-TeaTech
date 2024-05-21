const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function UpdateAnalises(body, token, id) {
    const response = await fetch(`${APIURL}/preAnalysis/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });

    return response.status
}
