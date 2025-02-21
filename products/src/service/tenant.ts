import axios from 'axios';

export async function getTenantService(tenant_id: string, auth_token: string) {
  const tenant_host = process.env.TENANT_HOST;
  const url = `${tenant_host}/api/tenant/${tenant_id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Authentication": auth_token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tenant service:', error);
    throw error;
  }
}