export async function RegisterAssistido(body) {
    const response = await fetch(`http://localhost:5149/api/childAssisted/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    console.log(response.status)
}