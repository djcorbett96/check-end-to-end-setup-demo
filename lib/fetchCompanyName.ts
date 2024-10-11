'use server'

export async function fetchCompanyName() {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHECK_API_KEY}`,
    };
    try {
        const response = await fetch(`https://sandbox.checkhq.com/companies/${process.env.COMPANY_ID}`, { headers });
        const data = await response.json();
        return data.legal_name;
    } catch (error) {
        console.error('Error fetching company name:', error);
        throw error;
    }
}
