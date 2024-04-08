export async function fetchFromAPI<T>(url: string, method: string, data?: any): Promise<T> {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers you need here
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

// Usage
// const data = await fetchFromAPI<YourDataType>(`/api/your-endpoint/`, 'GET');
// const createdData = await fetchFromAPI<YourDataType>(`/api/your-endpoint/`, 'POST', newData);
// const updatedData = await fetchFromAPI<YourDataType>(`/api/your-endpoint/${id}/`, 'PUT', updatedData);
// await fetchFromAPI<YourDataType>(`/api/your-endpoint/${id}/`, 'DELETE');