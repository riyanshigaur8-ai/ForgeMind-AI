import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkspaceSidebar from "@/components/WorkspaceSidebar/WorkspaceSidebar";

export default function WorkspaceLayout() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <Navbar />

      <div className="flex pt-16">
        <WorkspaceSidebar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}