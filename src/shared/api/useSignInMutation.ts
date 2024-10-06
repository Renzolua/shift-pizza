import { useMutation } from "@tanstack/react-query";
import { Response } from "../types/response";
import { $api } from "./api";


interface SignInResponseSchema extends Response {
  user: any;
  token: string;
}

interface SignInDto {
  phone: string;
  code: number;
}

export const useSignInMutation = () =>
  useMutation({
    mutationKey: ['signIn'],
    mutationFn: ({ phone, code }: SignInDto) => {
      return $api.post<SignInResponseSchema>('/users/signin', { phone, code });
    }
  });
