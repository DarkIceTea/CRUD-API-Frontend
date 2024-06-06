import { useFormik } from "formik";
import { auth } from "../../api/auth";
import { ChangeEvent } from "react";

type AuthFormValues = {
  name: string;
  email: string;
};

const defaultValues: AuthFormValues = {
  name: "",
  email: "",
};

export const AuthForm = () => {
  const onSubmit = async (values: AuthFormValues) => {
    await auth(values);
  };

  const { values, handleSubmit, setFieldValue } = useFormik({
    initialValues: defaultValues,
    onSubmit,
  });

  const handleChange =
    (fieldName: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(fieldName, e.target.value);
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.email}
        placeholder="Email"
        onChange={handleChange("email")}
      />
      <input
        value={values.name}
        placeholder="Name"
        onChange={handleChange("name")}
      />
      <button>Auth</button>
    </form>
  );
};
