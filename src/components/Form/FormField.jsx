const FormField = ({ field, error, onChange, value }) => {

  if (field.type === "select") {
    return (
      <>
        <select
          name={field.name}
          onChange={onChange}
          value={value ?? ""}
          id={field.name}
          required={Boolean(field.required)}
          className="w-full border border-[#ccc] py-2 px-3 rounded-2xl"
        >
          <option value="">Select an option</option>
        {Array.isArray(field.options) &&
            field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
        {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      </>
    );
  }

  if(field.type === "textarea" ){
    return (
    <>
     <textarea
          id={field.name}
          name={field.name}
          placeholder={field.placeholder || ""}
          value={value ?? ""}
          onChange={onChange}
          minLength={field.validations?.minLength}
          required={Boolean(field.required)}
          className="w-full border border-[#ccc] py-2 px-3 rounded-2xl"
          rows={4}
        />
        {error && (
          <p className="text-sm text-red-500 mt-1" role="alert">
            {error}
          </p>
        )}
    </>
    )
  }
    if(field.type === "radio" ){
    return (
    <>
  <div className="flex flex-col gap-2">
          {Array.isArray(field.options) &&
            field.options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  required={Boolean(field.required)}
                  className="w-4 h-4"
                />
                <span>{option.label}</span>
              </label>
            ))}
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-1" role="alert">
            {error}
          </p>
        )}
    </>
    )
  }
  if (field.type === "checkbox") {
    return (
      <>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id={field.name}
            name={field.name}
            checked={Boolean(value)}
            onChange={onChange}
            required={Boolean(field.required)}
            className="w-4 h-4"
          />
          <span>{field.label}</span>
        </label>
        {error && (
          <p className="text-sm text-red-500 mt-1" role="alert">
            {error}
          </p>
        )}
      </>
    );
  }
  const supportedInputTypes = ["text", "email", "password", "number", "date", "file"];
  if (supportedInputTypes.includes(field.type)) {
    return (
      <>
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder || ""}
          value={field.type === "file" ? undefined : value ?? ""}
          onChange={onChange}
          required={Boolean(field.required)}
          minLength={field.validations?.minLength}
          className="w-full border border-[#ccc] py-2 px-3 rounded-2xl"
        />
        {error && (
          <p className="text-sm text-red-500 mt-1" role="alert">
            {error}
          </p>
        )}
      </>
    );
  }
 return (
    <p className="text-sm text-orange-600">
      Unsupported field type: <strong>{field.type}</strong>
    </p>
  );
};
export default FormField;
