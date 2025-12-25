import {
  Home,
  Compass,
  BookOpen,
  Layers,
  CreditCard,
  Gift,
  Settings,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import FlowvaLogo from "../../assets/flowva_logo.png"

const Sidebar = () => {
  return (  
    <aside className="w-[230px] bg-white border-r border-gray-300 px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className=" rounded-full w-40" >
        
        <img src={FlowvaLogo} alt="Flowva Logo" />
        </div>
      </div>

      {/* Nav */}
      <nav className="space-y-1">
        <SidebarItem icon={Home} label="Home" />
        <SidebarItem icon={Compass} label="Discover" />
        <SidebarItem icon={BookOpen} label="Library" />
        <SidebarItem icon={Layers} label="Tech Stack" />
        <SidebarItem icon={CreditCard} label="Subscriptions" />
        <SidebarItem icon={Gift} label="Rewards Hub" active />
        <SidebarItem icon={Settings} label="Settings" />
      </nav>

      {/* User */}
      <div className="mt-auto py-4 border-t">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full text-purple-700 font-bold bg-purple-200 flex items-center justify-center">
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
