export function validateField(field, value) {
    console.log("field", field);
    const validations = field.validations ?? {};
    const messages = validations.messages ?? {};
    const isEmpty =
        field.type === "checkbox"
            ? value !== true
            : String(value ?? "").trim() === "";
    if (field.required && isEmpty) {
        return (
            messages.required ||
            (field.type === "checkbox"
                ? "You must accept the terms and conditions."
                : `${field.label} is required.`)
        );
    }
    if (isEmpty) {
        return "";
    }
    if (validations.minLength && String(value).length < validations.minLength) {
        return (
            messages.minLength ||
            `${field.label} must contain at least ${validations.minLength} characters.`
        );
    }
    if (validations.pattern) {
        const pattern = new RegExp(validations.pattern);
        if (!pattern.test(String(value))) {
            return messages.pattern || `${field.label} is not valid.`;
        }
    }
    return "";
}

export function validateForm(fields, values) {
    const errors = {};
    fields.forEach((field) => {
        const error = validateField(field, values[field.name])
        if (error) {
            errors[field.name] = error;
        }
    });
     return errors;
}
