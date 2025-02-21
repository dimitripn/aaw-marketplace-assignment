import axios from 'axios';

export async function verifyAdminTokenService(token: string) {
  try {
    const authServiceUrl = `${process.env.AUTHENTICATION_URL}/api/auth/verify-admin-token`;

    const response = await axios.post(authServiceUrl, { token });

    return response.data;
  } catch (error: any) {
    console.error('Error verifying admin token via auth service:', error);
    throw error;
  }
}
