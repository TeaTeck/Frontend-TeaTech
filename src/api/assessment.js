const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function UpdadeAssessment(body, token) {
    const response = await fetch(`${APIURL}/childAssisted/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });

    return response.status
}
