import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Home from "../sections/Home";
import Card from "../sections/Cards";

const Dashboard = () => {
  return (
    <>
      {/* <SidebarProvider> */}
      {/* <AppSidebar /> */}

      <main className="flex-1 flex flex-col relative">
        <div className="pt-10 pl-2 md:pt-7 absolute">
          {/* <SidebarTrigger /> */}
        </div>

        <div className="flex justify-center items-center flex-1 mt-10">
          {/* <Home /> */}
          <Card />
        </div>
      </main>
      {/* </SidebarProvider> */}
    </>
  );
};
export default Dashboard;
