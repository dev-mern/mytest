
import { deleteCookies } from './deleteCookies';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const logoutUser = (router: AppRouterInstance) => {
//    localStorage.removeItem(AUTH_KEY);
   deleteCookies(['accessToken', 'refreshToken','token']);
   router.push('/');
   router.refresh();
};