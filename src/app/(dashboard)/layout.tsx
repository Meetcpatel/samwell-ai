import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
