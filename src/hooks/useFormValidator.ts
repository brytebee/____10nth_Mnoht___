import { useForm, SubmitHandler } from "react-hook-form";
import { ZodObject, ZodRawShape } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

export const useFormWithValidation = <TFormData extends ZodRawShape>(validationSchema: ZodObject<TFormData>) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    // send toast notification here
    reset();
  };

  return { register, handleSubmit, onSubmit, errors, isSubmitting };
};