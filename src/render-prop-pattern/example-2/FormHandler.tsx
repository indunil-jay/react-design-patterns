import { useState } from "react";

type TFormHandler = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: Record<string, string>;
};

type TFormData = {
  name: string;
  email: string;
  password: string;
};

interface Props {
  render: (formObj: TFormHandler) => React.ReactNode;
}

const FormHandler = ({ render }: Props) => {
  const [formData, setFormData] = useState<TFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = "First name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      // Handle form submission
      console.log("Form submitted successfully", formData);
    }
  };

  return render({ handleChange, handleSubmit, error });
};

export default FormHandler;
