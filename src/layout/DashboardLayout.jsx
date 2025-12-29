import {useState} from "react"
import Sidebar from "../components/sidebar/Sidebar";
import { Menu, Bell } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
      
          <div className="flex relative min-h-screen bg-gray-50">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1 ml-0 md:ml-[230px]">
          {/* Mobile Header */}
          <div className={`${open ? "z-0":"z-50"} md:hidden fixed top-[10px] left-[8px] py-4  flex items-center`}>
            <button onClick={() => setOpen(true)}>
              <Menu className="w-[34px]"/>
            </button>
          </div>

        <main >
          <div
  className="
    fixed top-0 md:z-50 z-0
     md:left-[230px]
    w-full md:w-[calc(100%-230px)]
    flex justify-between items-center
    bg-gray-50 md:p-6 py-4 px-4 
  "
>

            <div >

                    <h1 className="text-2xl md:pl-0 pl-6 font-semibold">Rewards Hub</h1>
                    <p className="text-gray-500 mt-1 md:flex hidden">
                      Earn points, unlock rewards, and celebrate your progress!
                    </p>
                  </div>
          
                  {/* Notification */}
                  <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 text-black flex items-center justify-center">
                    <Bell className="text-[2px] w-[15px]" />
                  </div>

                  </div>


                  <div className="md:p-6 p-4 ">
          {children}
          </div>
          </main>
      </div>
    </div>
  );
};

export default DashboardLayout;