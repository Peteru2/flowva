// src/components/sidebar/Sidebar.jsx
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-8 w-8 rounded-full bg-purple-600" />
        <span className="font-semibold text-lg">Flowva</span>
      </div>

      {/* Nav */}
      <nav className="space-y-1">
        <SidebarItem label="Home" />
        <SidebarItem label="Discover" />
        <SidebarItem label="Library" />
        <SidebarItem label="Tech Stack" />
        <SidebarItem label="Subscriptions" />
        <SidebarItem label="Rewards Hub" active />
        <SidebarItem label="Settings" />
      </nav>

      {/* User */}
      <div className="mt-auto pt-6 border-t">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
            D
          </div>
          <div>
            <p className="text-sm font-medium">DevPeter</p>
            <p className="text-xs text-gray-500">
              polalekan526@gmail.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
