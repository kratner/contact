// Form.tsx
import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Button, TextField } from "@material-ui/core";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Name" {...register("name")} required />

      <TextField label="Email" {...register("email")} required />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
