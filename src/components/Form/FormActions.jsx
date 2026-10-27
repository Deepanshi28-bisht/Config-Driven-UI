const FormActions = ({ actions = [] }) => {
    const actionStyles = {
        reset: "bg-amber-300",
        submit: "bg-sky-500",
    };
    return (
        <div className="flex items-center justify-center gap-8">
            {actions.map((action, index) => (
                <button
                    key={`${action.type}-${index}`}
                    type={action.type}
                    className={`${actionStyles[action.type] ?? ""} py-2 px-4 text-white rounded-lg text-sm font-bold`}
                >
                    {action.label}
                </button>
            ))}
        </div>
    )

}

export default FormActions