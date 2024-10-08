import { useMutation } from '@tanstack/react-query';
import { $api } from './api';
import { Response } from '../types/response';

interface CreateOtpCodeResponseSchema extends Response {
  retryDelay: number;
}

interface CreateOtpCodeDto {
  phone: string;
}

export const useCreateOtpCodeMutation = () =>
  useMutation({
    mutationKey: ['createOtpCode'],
    mutationFn: ({ phone }: CreateOtpCodeDto) => {
      return $api.post<CreateOtpCodeResponseSchema>('/auth/otp', { phone });
    }
  });
