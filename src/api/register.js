const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function RegisterAssistido(body, token) {
    const response = await fetch(`${APIURL}/childAssisted/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    });

    console.log(response.status)
}
