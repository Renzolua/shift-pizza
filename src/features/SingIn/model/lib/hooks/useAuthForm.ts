import { useForm } from 'react-hook-form';
import { SignInStages } from '../consts/SignInStages';
import { phoneNumberSchema, PhoneNumberSchema } from '../schemas/PhoneNumberSchema';
import { otpCodeSchema, OtpCodeSchema } from '../schemas/OtpCodeSchema';

import { zodResolver } from '@hookform/resolvers/zod';

export const useAuthForm = (stage: SignInStages) =>
  useForm<PhoneNumberSchema | OtpCodeSchema>({
    resolver: zodResolver(stage === 'PHONE' ? phoneNumberSchema : otpCodeSchema)
  });
