import { NavLink, useNavigate } from "react-router-dom";
import {
  HiHome,
  HiUser,
  HiChatBubbleLeftRight,
  HiArrowLeftOnRectangle,
} from "react-icons/hi2";

export default function WorkspaceSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="hidden w-64 border-r border-white/10 bg-surface/70 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">ForgeMind</h1>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-brand-500 text-white"
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <HiHome size={22} />
          Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-brand-500 text-white"
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <HiUser size={22} />
          Profile
        </NavLink>

        <NavLink
          to="/career-chat"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-brand-500 text-white"
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            }`
          }
        >
          <HiChatBubbleLeftRight size={22} />
          Career Chat
        </NavLink>

      </nav>

      <div className="p-4">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
        >
          <HiArrowLeftOnRectangle size={22} />
          Logout
        </button>
      </div>
    </aside>
  );
}