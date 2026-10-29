import { useState, useEffect } from "react";
import Container from "../../container/Container";
import Heading2 from "../typography/Heading2";
import Paragraph from "../typography/Paragraph";
import FormActions from "./FormActions";
import FormField from "./FormField";
import { validateField, validateForm } from "../../utils/validation";

const Form = ({ config, onSubmit }) => {
  const formConfig = config?.config;

  if (!formConfig || !Array.isArray(formConfig.fields)) {
    return <p className="p-4 text-red-600">Invalid form configuration.</p>;
  }

  const getInitialValues = () => {
    const values = {};
    formConfig.fields.forEach((field) => {
     if (field.type === "checkbox") {
      values[field.name] = field.defaultValue === true || field.value === true;
    } else {
      values[field.name] = field.defaultValue ?? field.value ?? "";
    }
    });
    return values;
  };

  const [values, setValues] = useState(getInitialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(getInitialValues());
    setErrors({});
  }, [config]);

  function handleFieldChange(event) {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setValues((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    const field = formConfig.fields.find((item) => item.name === name);
    if (field) {
      const error = validateField(field, fieldValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm(formConfig.fields, values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onSubmit?.(values);
    setValues(getInitialValues());
    setErrors({});
  }

  function handleReset() {
    setValues(getInitialValues());
    setErrors({});
  }

  return (
    <main className="py-20 h-full w-full">
      <Container>
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          noValidate
          className="py-5 px-4 w-full max-w-[600px] mx-auto flex flex-col gap-5 shadow rounded-xl"
        >
          {formConfig.title && (
            <Heading2 classname="text-center">{formConfig.title}</Heading2>
          )}
          {formConfig.description && (
            <Paragraph classname="text-center">{formConfig.description}</Paragraph>
          )}

          {formConfig.fields.map((field) => (
            <div key={field.name} className="flex flex-col w-full gap-1">
              {field.type !== "checkbox" && (
                <label htmlFor={field.name} className="font-medium">
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>
              )}

              <FormField
                field={field}
                error={errors[field.name]}
                onChange={handleFieldChange}
                value={values[field.name]}
              />
            </div>
          ))}

          <FormActions actions={formConfig.actions} />
        </form>
      </Container>
    </main>
  );
};

export default Form;