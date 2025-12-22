// src/components/sidebar/SidebarItem.jsx
const SidebarItem = ({ label, active }) => {
  return (
    <div
      className={`px-4 py-2 rounded-lg cursor-pointer text-sm
        ${
          active
            ? "bg-purple-100 text-purple-700 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      {label}
    </div>
  );
};

export default SidebarItem;
