// src/components/sidebar/SidebarItem.jsx
const SidebarItem = ({ icon: Icon, label, active }) => {
  return (
    <div
      className={`px-4 py-[12px] mb-2 rounded-lg cursor-pointer text-[16px]
        ${
          active
            ? "bg-purple-200 text-purple-700 font-medium"
            : "text-black hover:bg-purple-200"
        }`}
    >
      <div className="flex items-center">
      <Icon size={18} className="mr-4" />
      <span>{label}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
