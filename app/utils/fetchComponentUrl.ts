'use server'

export async function fetchCompponentUrl() {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHECK_API_KEY}`,
    };
    const body = {
        signatory: "sig_TsFDjUFyYt8rIrrDz5yh",
        // mode: "submission_only"
    }
    try {
        const response = await fetch('https://sandbox.checkhq.com/companies/com_soESUMkDNgMRMDAZU8Ad/components/setup', { headers, method: 'POST', body: JSON.stringify(body) });
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching component URL:', error);
        throw error;
    }
}
