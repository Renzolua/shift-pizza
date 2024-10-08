import { useQuery } from '@tanstack/react-query';
import { USER_LOCALSTORAGE_KEY } from '../../../shared/consts/localstorage';
import { $api } from '../../../shared/api/api';


interface InitAuthDataResponseSchema extends Response {
  user: any;
}

export const useInitAuthDataQuery = () =>
  useQuery({
    queryKey: ['initAuthData'],
    queryFn: async () => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (!token) {
        throw new Error('token not found');
      }

      const response = await $api.get<InitAuthDataResponseSchema>('/users/session');

      return response.data;
    }
  });
