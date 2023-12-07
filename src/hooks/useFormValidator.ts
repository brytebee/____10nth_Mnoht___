import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ZodError, ZodObject, ZodRawShape } from "zod";

export const useFormWithValidation = <TFormData extends ZodRawShape>(validationSchema: ZodObject<TFormData>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    try {
      await validationSchema.parseAsync(data);
      console.log("Form data is valid:", data);
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }));
        return error
        console.error("Validation errors:", formattedErrors);
      }
    }
  };

  return { register, handleSubmit, onSubmit, errors };
};