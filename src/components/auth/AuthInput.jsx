const AuthInput = ({ label, type, placeholder,value,
  onChange, rightElement }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      {rightElement && (
          <div className="absolute inset-y-0 right-4 flex items-center">
            {rightElement}
          </div>
      )}
      </div>
    </div>
  );
};

export default AuthInput;
