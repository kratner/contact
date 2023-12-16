// Form.tsx
import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Button, TextField } from "@material-ui/core";

interface FormProps {
  formHeading?: string;
}

const Form: React.FC<FormProps> = ({ formHeading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
  };

  return (
    <div className="contact-form">
      <div className="contact-form-container">
        {formHeading && <h1>{formHeading}</h1>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Name" {...register("name")} required />

          <TextField label="Email" {...register("email")} required />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
