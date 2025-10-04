import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="ml-[304px] p-6 flex-1">
      </div>
    </div>
  );
}