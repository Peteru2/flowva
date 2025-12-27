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
import { useRewards } from "../../hooks/useRewards";
import { useAuth } from "../../context/AuthContext";


const Sidebar = ({open, setOpen}) => {
  const { user } = useAuth();
  return (  
  <>
  {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}
    <aside className={`
- fixed top-0 left-0 z-40 h-screen w-[230px]
+ fixed top-0 left-0 z-40 h-screen w-[230px] flex flex-col
  bg-white border-r border-gray-200 px-4 pt-6 pb-2
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0
`}>
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
          <div className="h-10 w-10 rounded-full bg-purple-200 text-purple-700 font-bold flex items-center justify-center">
  {user?.email?.[0]?.toUpperCase()}
</div>
          <div>
            <p className="text-sm font-medium">
{user?.email?.slice(0,4).toUpperCase()}

            </p>
            <p className="text-xs text-gray-500">
              
              {user?.email}
              {/* {user?.id} */}

            </p>
          </div>
        </div>
      </div>
    </aside>
</>
  );
};

export default Sidebar;
