import {END_POINTS} from "@/constants/endpoints";
import {signOut} from "next-auth/react";
import Cookies from "js-cookie";

// export const handleCallback = async (code: string, codeVerifier: string) => {
//     const url = 'https://account.devsphere.id.vn/oauth2/token';
//
//     const params = new URLSearchParams({
//         'grant_type': 'authorization_code',
//         'code': code,
//         'redirect_uri': 'https://api.devsphere.id.vn/authorized',
//         'code_verifier': codeVerifier,
//         'client_id': 'web-client'
//     });
//
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: params.toString()
//         });
//
//         if (!response.ok) {
//             return
//         }
//
//         const data = await response.json();
//         console.log('Token data:', data);
//         console.log('AT: ', data.access_token as string)
//
//         Cookies.set(`access_token`, data.access_token as string, {
//             expires: 7,
//             path: '/',
//             sameSite: 'Lax',
//         });
//         return data.access_token
//     } catch (error) {
//         console.error('Error fetching OAuth2 token:', error);
//         throw error;
//     }
// };


export const handleLogOut = async () => {
    const url = `${process.env.NEXT_PUBLIC_AUTH_FUTA_API_URL}/${END_POINTS.AUTH.LOGOUT}`
    const token = Cookies.get('access_token')
    await fetch(url,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    Cookies.remove('access_token')
    await signOut({
        callbackUrl: "/",
    });
}