import { useState } from "react";
import Container from "../../container/Container";
import Heading2 from "../typography/Heading2";
import Paragraph from "../typography/Paragraph";
import FormActions from "./FormActions";
import FormField from "./FormField";
import { validateField, validateForm } from "../../utils/validation";

const Form = ({ config, onSubmit }) => {
  const [errors, setErrors] = useState({});
  console.log("errors", errors);
  console.log(config);
  const formConfig = config?.config;
  if (!formConfig || !Array.isArray(formConfig.fields)) {
    return <p>Invalid form configuration.</p>;
  }
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    formConfig.fields.forEach((field) => {
      if (field.type === "checkbox") {
        const checkbox = event.currentTarget.elements.namedItem(field.name);
        values[field.name] = checkbox.checked;
      }
    });
    const newErrors = validateForm(formConfig.fields, values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    onSubmit?.(values);
    form.reset();
    setErrors({});
  }

  function handleFieldChange(event) {
    const { name, value, type, checked } = event.target;

    const field = formConfig.fields.find((item) => item.name === name);

    if (!field) return;

    const fieldValue = type === "checkbox" ? checked : value;

    const error = validateField(field, fieldValue);

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: error,
    }));
  }

  return (
    <main className="py-20 h-full w-full">
      <Container>
        <form
          onSubmit={handleSubmit}
          onReset={() => setErrors({})}
          noValidate
          className="py-5 px-4 w-full max-w-[600px] mx-auto flex flex-col justify-items-center gap-5 shadow rounded-xl"
        >
          <Heading2 classname="text-center">{formConfig.title}</Heading2>
          <Paragraph classname="text-center">
            {formConfig.description}
          </Paragraph>
          {formConfig.fields.map((field) => {
            return (
              <div key={field.name} className="flex flex-col w-full gap-2">
                <label htmlFor={field.name}>{field.label}</label>
                <FormField
                  field={field}
                  error={errors[field.name]}
                  onChange={handleFieldChange}
                />
              </div>
            );
          })}

          <FormActions actions={formConfig.actions} />
        </form>
      </Container>
    </main>
  );
};

export default Form;
