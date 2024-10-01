'use server'

export async function fetchCompponentUrl(component: string, body: Object) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHECK_API_KEY}`,
    };
    try {
        const response = await fetch(`https://sandbox.checkhq.com/companies/com_lJNPzDj84oXSre6JAYBD/components/${component}`, { headers, method: 'POST', body: JSON.stringify(body) });
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching component URL:', error);
        throw error;
    }
}
