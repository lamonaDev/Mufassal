import axios from 'axios';

const getAccessToken = async (): Promise<string> => {
    const clientId = process.env.NEXT_PUBLIC_POWERBI_CLIENT_ID;
    const tenantId = process.env.NEXT_PUBLIC_POWERBI_TENANT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_POWERBI_CLIENT_SECRET;
    if (!clientId || !tenantId || !clientSecret) {
        throw new Error('Missing Power BI environment variables: NEXT_PUBLIC_POWERBI_CLIENT_ID, NEXT_PUBLIC_POWERBI_TENANT_ID, and NEXT_PUBLIC_POWERBI_CLIENT_SECRET must be set');
    }
    const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('scope', 'https://analysis.windows.net/powerbi/api/.default');
    try {
        const response = await axios.post(url, params);
        if (!response.data.access_token) {
            console.log('No access token in response');
        }
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
};
export { getAccessToken };