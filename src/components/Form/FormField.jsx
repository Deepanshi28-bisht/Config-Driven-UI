const FormField = ({ field, error, onChange }) => {
  const supportedInputTypes = [
    "text",
    "email",
    "password",
    "number",
    "date",
    "checkbox",
    "radio",
    "file",
  ];
  const isSupportedInput = supportedInputTypes.includes(field.type);
  return (
    <>
      {field.type === "select" ? (
        <select
          name={field.name}
          onChange={onChange}
          id={field.name}
          required={Boolean(field.required)}
          className="w-full border border-[#ccc] py-2 px-3 rounded-2xl"
        >
          <option value="">Select an option</option>
          {field.options?.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          placeholder={field.placeholder || ""}
          onChange={onChange}
          minLength={field.validations?.minLength}
          required={Boolean(field.required)}
          className="w-full border border-[#ccc] py-2 px-3 rounded-2xl"
        />
      ) : isSupportedInput ? (
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder || ""}
          onChange={onChange}
          minLength={field.validations?.minLength}
          required={Boolean(field.required)}
          className="w-full border border-[#ccc] py-2 px-3 rounded-2xl"
        />
      ) : (
        <p>Unsupported field type: {field.type}</p>
      )}
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </>
  );
};
export default FormField;
